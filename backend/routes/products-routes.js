import express from 'express';
import { getProducts, getProduct } from '../controllers/products-controller.js';

const router = express.Router();

router.get( '/', getProducts );
router.get( '/:id', getProduct );

export default router;