import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

// Development mode credentials
const DEV_USER = {
  id: '1234-5678-9012',
  email: 'test@example.com',
  name: 'Test User',
  company: 'Test Company',
  role: 'admin'
};

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    // Development mode: Accept test credentials
    if (email === 'test@example.com' && password === 'password123') {
      const token = jwt.sign(DEV_USER, JWT_SECRET, { expiresIn: '24h' });
      console.log('Development login successful');
      return res.json({ token, user: DEV_USER });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;