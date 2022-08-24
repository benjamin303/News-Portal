import express from "express";
import {
  getMessages,
  getMessageById,
  saveMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/MessageController.js";

const router = express.Router();

router.get("/messages", getMessages);
router.get("/messages/:id", getMessageById);
router.post("/messages", saveMessage);
router.patch("/messages/:id", updateMessage);
router.delete("/messages/:id", deleteMessage);

export default router;
