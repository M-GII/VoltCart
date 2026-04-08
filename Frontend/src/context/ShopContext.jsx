import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFee = 6;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        if (!size) {
            toast.error("Please select a option");
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        if (token) {
            try {
                const response = await axios.post(backendUrl + "/api/cart/add", { itemId, size }, { headers: { token } });

            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message || error.message || "Error adding item to cart");
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;

    }
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        if (token) {
            try {
                await axios.put(backendUrl + "/api/cart/update", { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message || error.message || "Error updating cart");

            }
        }

    }
    const getUserCart = async (token) => {
        try {
            const response = await axios.get(backendUrl + "/api/cart/get", { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || error.message || "Error fetching user cart");
        }
    }
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find(product => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += Number(cartItems[items][item]) * Number(itemInfo.price);
                    }
                } catch (error) {
                }
            }
        }
        return totalAmount;
    }
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/list");
            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Error fetching products data");
            console.log(error)
        }
    }
    useEffect(() => {
        getProductsData();
    }, [])
    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            getUserCart(localStorage.getItem("token"));
        }
    }, [])

    const value = {
        products, currency, deliveryFee, search, setSearch, showSearch, setShowSearch, cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;