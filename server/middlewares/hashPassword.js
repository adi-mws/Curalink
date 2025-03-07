import bcrypt from "bcryptjs";

const hashPassword = async function (next) {
    // Only hash the password if it has been modified
    if (!this.isModified("password")) return next();

    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
};

export default hashPassword;
