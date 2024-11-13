import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

// Development mode user for testing
const DEV_USER = {
  id: '1234-5678-9012',
  email: 'test@example.com',
  name: 'Test User',
  company: 'Test Company',
  role: 'admin'
};

export const authMiddleware = (req, res, next) => {
  // Development mode bypass
  if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode: Using mock authentication');
    req.user = DEV_USER;
    return next();
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};