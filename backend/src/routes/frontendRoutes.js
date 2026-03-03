import express from "express";
import { renderSeoBlogPage } from "../controllers/seoController.js";

const router = express.Router();

router.get("/blog/:slug", renderSeoBlogPage);

export default router;
