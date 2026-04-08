import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
const List = ({token}) => {

  const [list, setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      }
    } catch (error) {
      console.error('Error fetching product list:', error)
      toast.error(error.response?.data?.message || 'Error fetching product list')
    }
  }
  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/product/remove?id=${id}`,{
        headers: {token}
      })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }
    } catch (error) {
      console.error('Error removing product:', error)
      toast.error(error.response?.data?.message || 'Error removing product')
    }
  }
    
  useEffect(() => {
    fetchList()
  }, [])
  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Actions</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm'>
            <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover rounded' />
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>${item.price.toFixed(2)}</span>
            <div className='text-center'>
              <button onClick = {() => removeProduct(item._id)} className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2'>Delete </button>
            </div>
          </div>
        ))}

      </div>

    </>
  )
}

export default List