import express from 'express';
import { Client } from '../models/Client.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    // Find all clients for the current user
    const clients = await Client.findAll({
      where: { userId: req.user.id },
    });
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create client with current user's ID
    const client = await Client.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(client);
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const client = await Client.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      }
    });

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    await client.update(req.body);
    res.json(client);
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      }
    });

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    await client.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;