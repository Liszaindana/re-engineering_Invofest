import express from "express";
import { createSpeaker, getAllSpeakers, getSpeakerById, updateSpeaker, deleteSpeaker, updateSpeakerCategories } from "../controllers/speakerController.js";

const router = express.Router();

router.get("/", getAllSpeakers);
router.post("/", createSpeaker);
router.get("/:id", getSpeakerById);
router.put("/:id", updateSpeaker);
router.put("/:id/categories", updateSpeakerCategories);
router.delete("/:id", deleteSpeaker);

export default router;

