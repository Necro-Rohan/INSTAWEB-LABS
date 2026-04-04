import express from "express";
import { renderSeoBlogPage } from "../controllers/SeoController.js";
import { getHubData } from "../controllers/HubController.js";

const router = express.Router();

// SEO-Optimized Blog Post Pages
router.get("/blog/:slug", renderSeoBlogPage);

// Hub Pages (Added so SeoController can intercept them!)
router.get("/blog/category/:slug", renderSeoBlogPage);
router.get("/blog/location/:slug", renderSeoBlogPage);

// Backend API Data Fetcher
router.get("/hub/:type/:slug", getHubData);

export default router;
