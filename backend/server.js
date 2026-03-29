import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import helmet from 'helmet';
import "./src/jobs/worker.js"; // remember to comment this out if you run it on local host with command npm run dev as we have configured this command to start both server and worker together using concurrently. 

dotenv.config();

import connectDb from './db.js';
import aiRoute from './src/routes/blogRoutes.js';
import frontendRoutes from './src/routes/frontendRoutes.js';
import indexingRoutes from "./src/routes/indexingRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  helmet({
    // disabling the strict CSP for now so it doesn't accidentally block your Cloudinary/Unsplash images
    contentSecurityPolicy: false,
  }),
);

connectDb();

app.use((req, res, next) => {
  console.log("Backend hit:", req.method, req.url);
  next();
});

// i want Express to handle our backend data requests before it even thinks about 
// looking for frontend pages or static files.
app.use('/api', aiRoute);

// Got to make sure Googlebot can find our sitemaps and robots.txt before hitting the static folder.
app.use("/", indexingRoutes);

// This intercepts traffic to our blog URLs and injects the dynamic meta tags for SEO.
app.use('/', frontendRoutes);

// We are telling the browser and Cloudflare to hold onto our heavy JS/CSS/Images for a full year.
// DANGER: 'index: false' is absolutely critical here! 
// Without it, Express might accidentally cache our root index.html for a year, 
// which means if we push new code, our users would never see it.
app.use(express.static(path.resolve(__dirname, '../frontend/dist'), { 
  index: false,
  maxAge: '1y', 
  etag: false
}));

// If a user types a random URL (like /blog/my-cool-post), Express won't find a file for it. 
// This catch-all steps in, serves the React app, and lets React Router take over the steering wheel.
app.get(/^\/(.*)$/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"), {
    headers: {
      // DANGER: We strictly tell Cloudflare NOT to cache index.html.
      // Because index.html is the "map" to our hashed Vite JS files.
      // If the map gets cached and we push a new update, users will get a White Screen of Death
      // because the cached HTML will be looking for old Javascript files that no longer exist!
      "Cache-Control": "no-cache",
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Engine running on port http://127.0.0.1:${PORT}`));