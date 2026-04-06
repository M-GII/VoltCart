import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, sizeLabel, bestseller } = req.body
        const image1 = req.files.image1 && req.files.image1[0]

        const images = [image1].filter((item) => item !== undefined)
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )
        if (!name || !description || !price || !category || !subCategory || !sizes || !sizeLabel) {
            return res.status(400).json({ message: "All fields are required", success: false })
        }
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            sizeLabel,
            bestseller: bestseller === 'true' ? true : false,
            image: imagesUrl,
            date: Date.now()
        }
        const product = new productModel(productData)
        await product.save()
        res.json({ message: "Product added successfully", success: true })
    } catch (error) {
        console.error("Error adding product:", error)
        res.status(500).json({ message: error.message, success: false })
    } 
}

const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.query.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found", success: false })
        }
        res.json({ product, success: true })
    } catch (error) {
        console.error("Error fetching product:", error)
        res.status(500).json({ message: error.message, success: false })
    }
}

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({ products, success: true })
    } catch (error) {
        console.error("Error fetching products:", error)
        res.status(500).json({ message: error.message, success: false })
    }
}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.query.id)
        res.json({ message: "Product removed successfully", success: true })
    } catch (error) {
        console.error("Error removing product:", error)
        res.status(500).json({ message: error.message, success: false })
    }
}

export { addProduct, singleProduct, listProducts, removeProduct }