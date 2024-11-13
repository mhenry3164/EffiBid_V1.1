import express from 'express';
import { Estimate } from '../models/Estimate.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const estimates = await Estimate.findAll();
    res.json(estimates);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const estimate = await Estimate.create(req.body);
    res.status(201).json(estimate);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;