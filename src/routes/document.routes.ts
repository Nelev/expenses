import { Router } from 'express';
import * as documentController from '../controllers/document.controller';

const router = Router();

router.post('/', documentController.handleProcessDocument);

export default router;