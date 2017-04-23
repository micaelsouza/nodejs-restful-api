import express from 'express';
import ProductsController from '../controllers/products';
import Product from '../models/product';

const router = express.Router();
const productsController = new ProductsController(Product);

router.post('/', (req, res) => productsController.post(req, res));
router.get('/', (req, res) => productsController.get(req, res));
router.get('/:productId', (req, res) => productsController.getById(req, res));
router.put('/:productId', (req, res) => productsController.update(req, res));
router.delete('/:productId', (req, res) => productsController.delete(req, res));

export default router;