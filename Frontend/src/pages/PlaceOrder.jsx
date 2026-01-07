import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/assests";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder =() => {

  const [method , setMethod] =useState("cod");
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 m-h-[80vh] border-t">
      {/* Left */}
      <div className="flex flex-col gap=4 w-full max-w-[480px]">
        <div className="text-xl my-3 sm:2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded px-3.5 py-1.5"/>
          <input type="text" placeholder="Last Name" className="w-full border rounded border-gray-300 px-3.5 py-1.5"/>
        </div>
        <input type="email" placeholder="Email" className="w-full border rounded border-gray-300 px-3.5 py-1.5 mt-2"/>
        <input type="text" placeholder="Street Address" className="w-full border rounded border-gray-300 px-3.5 py-1.5 mt-2"/>
        <div className="flex gap-3 mt-2">
          <input type="text" placeholder="City" className="w-full border border-gray-300 rounded px-3.5 py-1.5"/>
          <input type="text" placeholder="Province/State" className="w-full border rounded border-gray-300 px-3.5 py-1.5"/>
        </div>
        <div className="flex gap-3 mt-2">
          <input type="number" placeholder="Postal/Zip code" className="w-full border border-gray-300 rounded px-3.5 py-1.5"/>
          <input type="text" placeholder="Country" className="w-full border rounded border-gray-300 px-3.5 py-1.5"/>
        </div>
          <input type="number" placeholder="Phone Number" className="w-full border border-gray-300 rounded mt-2 px-3.5 py-1.5"/>
          
        
    
      </div>
      {/* Right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          {/* Payment Options */}
          <div className="flex gap-3 fol-col lg:flex-row">
            <div onClick={()=>setMethod("stripe")}  className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="stripe" ? "bg-green-400":""}`}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod("razorpay")}  className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="razorpay" ? "bg-green-400":""}`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="cod" ? "bg-green-400":""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm"> PLACE ORDER</button>

          </div>
        </div>

      </div>
      
      
        </div>
  )
}

export default PlaceOrder