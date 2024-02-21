import express from "express";
import { UpdateProduct, createProduct, deleteproduct, getProductById, getProducts,  } from "../controller/productController.js";

const routes = express.Router();

routes.route('/').get(getProducts).post(createProduct),
routes.route('/:id').get(getProductById).put(UpdateProduct).delete(deleteproduct)

export default routes
