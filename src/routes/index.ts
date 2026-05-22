import { Router } from 'express';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// API v1 routes will be added here
// router.use('/api/v1/auth', authRoutes);
// router.use('/api/v1/products', productRoutes);
// router.use('/api/v1/orders', orderRoutes);

export default router;
