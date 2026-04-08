import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'
const Add = ({token}) => {
  const [image1, setImage1] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Hardware')
  const [subCategory, setSubCategory] = useState('Boards')
  const [price, setPrice] = useState('')
  const [sizes, setSizes] = useState('')
  const [sizeLabel, setSizeLabel] = useState('')
  const [bestseller, setBestseller] = useState(false)


  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const sizesArray = sizes.split(',').map(item => item.trim()).filter(item => item !== '')

      const formData = new FormData()
      image1 && formData.append("image1", image1)
      formData.append("name", name)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("price", price)
      formData.append("sizes", JSON.stringify(sizesArray))
      formData.append("sizeLabel", sizeLabel)
      formData.append("bestseller", bestseller)
      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: {token}
      })
        if (response.data.success) {
          toast.success(response.data.message)
          setImage1(false)
          setName('')
          setDescription('')
          setCategory('Hardware')
          setSubCategory('Boards')
          setPrice('')
          setSizes('')
          setSizeLabel('')
          setBestseller(false)
        }
    } catch (error) {
      console.error('Error adding product:', error)
      toast.error('Error adding product')
    }

  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img src={ !image1 ? assets.upload_area : URL.createObjectURL(image1) } alt="upload" className='w-20' />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value = {name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value = {description} className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2' >Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value = {category} className='w-full px-3 py-2'>
            <option value="Hardware">Hardware</option>
            <option value="Components">Components</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Subcategory</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value = {subCategory} className='w-full px-3 py-2'>
            <option value="Boards">Boards</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Resistors">Resistors</option>
            <option value="Capacitors">Capacitors</option>
            <option value="ICs">ICs</option>
            <option value="Sensors">Sensors</option>
            <option value="Displays">Displays</option>
            <option value="Power">Power</option>
            <option value="Tools">Tools</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Price</p>
          <input onChange = {(e) => setPrice(e.target.value)} value = {price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='Enter price in CAD' required />
        </div>
      </div>
      <div>
        <p className='mb-2'>Sizes(comma separated)</p>
        <div>
          <input onChange = {(e) => setSizes(e.target.value)} value = {sizes} type="text" placeholder="e.g. UNO R3, UNO R3 + Cable, Starter Kit" className='w-full max-w-[500px] px-3 py-2' required />
        </div>
        <p className='mb-2 mt-2'>Size Label</p>
        <input onChange={(e) => setSizeLabel(e.target.value)} value = {sizeLabel} type="text" name="sizeLabel" placeholder="e.g. Configuration, Connector Type, Resistance Range" className='w-full max-w-[500px] px-3 py-2' required />
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={(e) => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" name="bestseller" />
        <label htmlFor="bestseller" className='cursor-pointer'>Add to bestseller</label>
      </div>
      <button type='submit' className='w-28 bg-black text-white mt-5 py-3 mt-4'>Add Product</button>
    </form >
  )
}

export default Add