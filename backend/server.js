import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

import connectDb from './db.js';
import aiRoute from './src/routes/aiRoutes.js';
import frontendRoutes from './src/routes/frontendRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

app.use('/api', aiRoute);

// Frontend Serving & SEO Magic 
// Static files serving
app.use(express.static(path.resolve(__dirname, '../frontend/dist'), { index: false }));

// Blog page ka SEO injection 
app.use('/', frontendRoutes);

// Fallback Route 
app.get(/^(.*)$/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Engine running on port http://localhost:${PORT}`));
