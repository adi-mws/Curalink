import express from "express";
import dotenv from 'dotenv'; 
import connectDB from "./db/connectDB.js";
import cors from 'cors';
import path from 'path';    
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import faqRoutes from './routes/faqRoutes.js'

dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,

}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.json({ limit: '80mb' })); // Adjust the size limit
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database Connection
connectDB(process.env.MONGO_URI);



// User Routes (handles login/register/verification of user)
app.use('/api/user', userRoutes);

// FAQ Routes (handles all the faq (frequently asked questions) operations)
app.use('/api/faqs', faqRoutes);


app.get('/', (req, res) => {
    res.send('Curalink Backend Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});



