import express from "express";
import {placeOrder, allOrders, userOrders, updateStatus} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder);
orderRouter.get("/list", adminAuth, allOrders);
orderRouter.post("/userorders", authUser, userOrders);
orderRouter.put("/status", adminAuth, updateStatus);

export default orderRouter;