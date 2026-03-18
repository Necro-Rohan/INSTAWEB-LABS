import express from 'express';
import { BlogGenerator, getBlogPost, getAllBlogPosts } from "../controllers/BlogController.js";
import {verifyAdmin} from "../middlewares/adminVerification.js"

const router = express.Router()

router.post("/generate", verifyAdmin, BlogGenerator);
// router.get("/proxy-ai-image", generateAiImageUrl);

router.get("/blog/:slug", getBlogPost);

router.get("/blogs", getAllBlogPosts);

export default router;