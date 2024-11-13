import jwt from 'jsonwebtoken';

// Mock user for development mode
const DEV_USER = {
  id: '1234-5678-9012',
  email: 'test@example.com',
  name: 'Test User',
  company: 'Test Company',
  role: 'admin'
};

/**
 * Authentication middleware
 * Development Mode:
 * - Enabled by default for local development
 * - Skips JWT verification and injects a mock user
 * - IMPORTANT: Ensure proper authentication is implemented before production
 */
export const verifyToken = async (req, res, next) => {
  // Development mode bypass
  if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode: Using mock authentication');
    req.user = DEV_USER;
    return next();
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(403).json({ message: 'Invalid token' });
  }
};