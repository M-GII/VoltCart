import express from "express";
import {addProduct, singleProduct, listProducts, removeProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router()

productRouter.post('/add',adminAuth,upload.fields([{name : 'image1', maxCount:1}]), addProduct)
productRouter.get('/single', singleProduct)
productRouter.get('/list', listProducts)
productRouter.delete('/remove', adminAuth, removeProduct)

export default productRouter