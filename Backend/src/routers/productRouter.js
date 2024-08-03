import express from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { verifyAccessToken } from "../Middlewares/TokenVerifiers.middleware.js";
import { addTokenToRequest } from "../Middlewares/TokenCheckers.middleware.js";

const router = express.Router();

router.post("/create", addTokenToRequest,verifyAccessToken,createProduct);
router.get("/:id", addTokenToRequest,verifyAccessToken,getProduct).delete("/:id", addTokenToRequest,verifyAccessToken,deleteProduct);;
router.get("/get/all", addTokenToRequest,verifyAccessToken,getProducts);

export default router;

