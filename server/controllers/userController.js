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
export const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if user with given email and role exists
        const user = await User.findOne({ email, role });
        if (!user) return res.status(400).json({ message: "Account does not exist" });

        // Check Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate Token
        const token = generateToken(user._id, user.role);

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



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

