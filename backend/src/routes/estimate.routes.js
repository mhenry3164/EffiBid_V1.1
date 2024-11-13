import express from 'express';
import { Estimate } from '../models/Estimate.js';
import { Customer } from '../models/Customer.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const estimates = await Estimate.findAll({
      include: [{ model: Customer }],
    });
    res.json(estimates);
  } catch (error) {
    console.error('Error fetching estimates:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const estimate = await Estimate.create(req.body);
    res.status(201).json(estimate);
  } catch (error) {
    console.error('Error creating estimate:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const estimate = await Estimate.findByPk(req.params.id);
    
    if (!estimate) {
      return res.status(404).json({ message: 'Estimate not found' });
    }

    await estimate.update(req.body);
    res.json(estimate);
  } catch (error) {
    console.error('Error updating estimate:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const estimate = await Estimate.findByPk(req.params.id);
    
    if (!estimate) {
      return res.status(404).json({ message: 'Estimate not found' });
    }

    await estimate.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting estimate:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;