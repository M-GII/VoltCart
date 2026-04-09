import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assests";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
const PlaceOrder = () => {

  const [method, setMethod] = useState("cod");
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, deliveryFee, products } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            let itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      }
      const response = await axios.post(backendUrl + "/api/order/place", orderData, { headers: { token } })
      if (response.data.success) {
        setCartItems({})
        navigate("/orders")
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || error.message || "Error placing order");

    }
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 m-h-[80vh] border-t">
      {/* Left */}
      <div className="flex flex-col gap=4 w-full max-w-[480px]">
        <div className="text-xl my-3 sm:2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input required type="text" name="firstName" value={formData.firstName} onChange={onChangeHandler} placeholder="First Name" className="w-full border border-gray-300 rounded px-3.5 py-1.5" />
          <input required type="text" name="lastName" value={formData.lastName} onChange={onChangeHandler} placeholder="Last Name" className="w-full border rounded border-gray-300 px-3.5 py-1.5" />
        </div>
        <input required type="email" name="email" value={formData.email} onChange={onChangeHandler} placeholder="Email" className="w-full border rounded border-gray-300 px-3.5 py-1.5 mt-2" />
        <input required type="text" name="street" value={formData.street} onChange={onChangeHandler} placeholder="Street Address" className="w-full border rounded border-gray-300 px-3.5 py-1.5 mt-2" />
        <div className="flex gap-3 mt-2">
          <input required type="text" name="city" value={formData.city} onChange={onChangeHandler} placeholder="City" className="w-full border border-gray-300 rounded px-3.5 py-1.5" />
          <input required type="text" name="province" value={formData.province} onChange={onChangeHandler} placeholder="Province/State" className="w-full border rounded border-gray-300 px-3.5 py-1.5" />
        </div>
        <div className="flex gap-3 mt-2">
          <input required type="text" name="postalCode" value={formData.postalCode} onChange={onChangeHandler} placeholder="Postal/Zip code" className="w-full border border-gray-300 rounded px-3.5 py-1.5" />
          <input required type="text" name="country" value={formData.country} onChange={onChangeHandler} placeholder="Country" className="w-full border rounded border-gray-300 px-3.5 py-1.5" />
        </div>
        <input required type="number" name="phone" value={formData.phone} onChange={onChangeHandler} placeholder="Phone Number" className="w-full border border-gray-300 rounded mt-2 px-3.5 py-1.5" />



      </div>
      {/* Right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Options */}
          <div className="flex gap-3 fol-col lg:flex-row">
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm"> PLACE ORDER</button>

          </div>
        </div>

      </div>


    </form>
  )
}

export default PlaceOrder