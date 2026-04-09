import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try {
        const userId = req.user.id
        const {items,amount,address} = req.body;
        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "COD",
            payment: false,
            address
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        res.status(200).json({success: true, message: "Order placed successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message ,success: false });
        console.error("Error placing order:", error);
    }
}


const allOrders = async (req, res) => {
    try {
        const orders= await orderModel.find({}).sort({date: -1})
        res.status(200).json({success: true, orders})
    } catch (error) {
        res.status(500).json({ message: error.message ,success: false });
        console.error("Error fetching all orders:", error);
    }
}

const userOrders = async (req, res) => {
    try {
        const userId = req.user.id
        const orders = await orderModel.find({userId}).sort({date: -1})
        res.status(200).json({success: true, orders})
    } catch (error) {
        res.status(500).json({ message: error.message ,success: false });
        console.error("Error fetching user orders:", error);
    }
}

const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.status(200).json({success: true, message: "Order status updated successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message ,success: false });
        console.error("Error updating order status:", error);
    }
}

export { placeOrder, allOrders, userOrders, updateStatus };