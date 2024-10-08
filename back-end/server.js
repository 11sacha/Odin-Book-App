import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { register } from "./controllers/auth.js";
import { createPost } from './controllers/post.js';
import authRoutes from "./routes/auth.js";
import usersRoutes from './routes/users.js';
import postsRoutes from './routes/posts.js';
import { verifyToken } from './middleware/auth.js';
import Post from './models/Post.js'
import User from './models/User.js';
import { users, posts } from './data/dummyData.js'


// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'back-end/public/assets')));

// FILE STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// ROUTES WITH FILES
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", upload.single("picture"), createPost);

//ROUTES
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes)


// MONGOOSE SET UP
const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB..');
    // User.insertMany(users);
    //Post.insertMany(posts);
    console.log(`Server running on port: ${PORT}`)
})

// app.get('/', (req, res) => {
//     res.send("Server's running!")
//   });
 



