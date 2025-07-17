/*const express = require("express");
const { togglePinQuestion, updateQuestionNote, addQuestionsToSession } = require('../controllers/questionController');
const { protect } = require('../middlewares/authMiddleware');
const { createSession, getSessionById, getMySessions, deleteSession } = require('../controllers/sessionController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', protect, addQuestionsToSession);
router.post('/:id/pin', protect, togglePinQuestion);
router.post('/:id/note', protect,updateQuestionNote);
router.post('/create', protect, createSession);
router.get('/my-sessions', protect, getMySessions);
router.get('/:id', protect, getSessionById);
router.delete('/:id', protect, deleteSession);

module.exports = router;*/

import express from "express";
import {
  togglePinQuestion,
  updateQuestionNote,
  addQuestionsToSession
} from "../controllers/questionController.js";
import {
  createSession,
  getSessionById,
  getMySessions,
  deleteSession
} from "../controllers/sessionController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);
router.post("/:id/note", protect, updateQuestionNote);

router.post("/create", protect, createSession);
router.get("/my-sessions", protect, getMySessions);
router.get("/:id", protect, getSessionById);
router.delete("/:id", protect, deleteSession);

export default router;
