import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({ message: "Access denied", success: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: "1d" });
        if (decoded.role === 'admin') {
            next();
        } else {
            return res.status(401).json({ message: "Invalid admin credentials", success: false });
        }
    } catch (error) {
        console.error("Error verifying admin token:", error);
        return res.status(401).json({ message: "Invalid token", success: false });
    }
};

export default adminAuth;