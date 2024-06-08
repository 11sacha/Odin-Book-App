import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User.js';

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "New user created!", savedUser})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User does not exist"});

        const validPassword = await bcrypt.compare(password, user?.password || "")
        if (!validPassword) return res.status(400).json({ message: "Invalid credentials.."});

        
    } catch (error) {
        
    }
}