import express from "express";
import { renderSeoBlogPage } from "../controllers/SeoController.js";

const router = express.Router();

router.get("/blog/:slug", renderSeoBlogPage);

export default router;
