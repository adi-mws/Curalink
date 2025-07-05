import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Generate JWT Token
const generateToken = (userId, role) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

dotenv.config();



export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create New User
        user = new User({ name, email, password: hashedPassword, role });
        await user.save();



        // Saving profile details of three different roles 

        // Generate Token
        const token = generateToken(user._id, user.role);


        // Email Sending 



        res.status(201).json({ message: "User registered successfully", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



export const verifyUser = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        try {
            // Find the user by id from the decoded token
            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }


            // Return full user details along with a boolean indicating if user exists
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
               
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching user data', error });
        }
    });
};



export const googleAuth = async (req, res) => {
    const { token, username, available } = req.body;

    try {
        // Verify the Google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
// aditya@email  
        const { sub, email, name, picture } = ticket.getPayload();  // Extract Google user data
        if (available) { // if user already exists
            const user = await User.findOne({ email: email, type: "google", googleId: sub }) // fetch the existing user
            if (!user) {
                return res.status(404).json({ message: "User not found in database! for Google Auth Login" })
            }
            const jwtToken = jwt.sign(
                { id: user._id, email, name: user.name, pfp: user.pfp },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            res.cookie('googleToken', jwtToken, {
                httpOnly: true,       // Prevent client-side access
                secure: process.env.NODE_ENV === 'production',  // Secure in production
                sameSite: 'Strict',   // Prevent CSRF attacks
                maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days expiration
            });

            return res.status(200).json({
                message: "Google Auth Login Successful!", user: {
                    id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    pfp: user.pfp,
                    type: 'google'
                }
            })
        }

        // Registration of new user
        if (username && !available) {
            const newUser = await User.create({
                googleId: sub,
                username: username,
                name: name,
                email: email,
                pfp: 'uploads/pfps/default-pfp.jpeg',
                type: 'google'
            })
            await newUser.save();

            const jwtToken = jwt.sign(
                { id: newUser._id, email, name: newUser.name, pfp: newUser.pfp },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            res.cookie('googleToken', jwtToken, {
                httpOnly: true,       // Prevent client-side access
                secure: process.env.NODE_ENV === 'production',  // Secure in production
                sameSite: 'Strict',   // Prevent CSRF attacks
                maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days expiration
            });
            return res.status(201).json({
                message: "Google Auth Successfull",
                user: {
                    id: newUser._id,             // Google ID
                    username: newUser.username,
                    name: newUser.name,        // Google Username
                    email: newUser.email,                    // Google Email
                    pfp: newUser.pfp,
                    type: 'google'            // Google Profile Picture
                }
            });
        }

        return res.status(500).json({ message: 'None of the function (login or register) Google Auth triggered | Error can be with available and ' })

    } catch (error) {
        console.error('Error during Google Auth:', error);
        res.status(500).json({ message: 'Error during Google Authentication' });
    }
};


export const isUsernameExists = async (req, res) => {
    try {
        const un = await User.findOne({ username: req.params.username });
        if (!un) {
            return res.status(200).json({ available: true, message: "Availability sent successfully!" });
        }
        return res.status(200).json({ available: false, message: "Availability sent successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Error in checking username!" })
    }
}


export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username: username, type: 'normal' });

        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // Check if the password matches
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },  // Payload
            process.env.JWT_SECRET,                   // Secret Key
            { expiresIn: '7d' }                       // Expiration Time
        );

        // Set token in HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,       // Prevent client-side access
            secure: process.env.NODE_ENV === 'production',  // Secure in production
            sameSite: 'Strict',   // Prevent CSRF attacks
            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days expiration
        });

        // Send response with user details
        res.status(200).json({
            message: "User logged in successfully!",
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                pfp: user.pfp ? `${process.env.BASE_URL}/${user.pfp}` : null
            },
            token // Also send the token in response
        });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error logging in user' });
    }
};

