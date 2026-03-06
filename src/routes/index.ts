import { Router } from 'express';
import documentRoutes from './document.routes';

const router = Router();

// Mount feature routes
router.use('/documents', documentRoutes);

export default router;