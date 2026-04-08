import userModel from "../models/userModel.js"


const addToCart = async (req, res) => {
    try {
        const userId = req.user.id
        const { itemId, size } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        if(cartData[itemId]){
                if(cartData[itemId][size]){
                    cartData[itemId][size] += 1
                }
                else {
                    cartData[itemId][size] = 1
                }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await userModel.findByIdAndUpdate(userId,  {cartData })
        return res.status(200).json({ success: true, message: "Item added to cart successfully" })
    } catch (error) {
        console.error("Error adding item to cart:", error);
        return res.status(500).json({success:false, message: error.message });
    }
}

const updateCart = async (req, res) => {
    try {
        const userId = req.user.id
        const { itemId, size, quantity } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        cartData[itemId][size] = quantity
        await userModel.findByIdAndUpdate(userId, {cartData })
        return res.status(200).json({ success: true, message: "Item updated in cart successfully" })
    } catch (error) {
        console.error("Error updating cart:", error);
        return res.status(500).json({success:false, message: error.message });
    }
}

const getUserCart = async (req, res) => {
    try {
        const userId = req.user.id
        const userData = await userModel.findById(userId)
        let cartData = userData.cartData
        return res.status(200).json({ success: true, cartData })
    } catch (error) {
        console.error("Error fetching user cart:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export { addToCart, updateCart, getUserCart };