import React, { useContext , useState , useEffect} from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assests";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection =() => {
  const {products , search , showSearch} = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category,setCategory]= useState([]);
  const [sortCriteria,setSortCriteria]= useState("relavent");
  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item =>item !== e.target.value));
    }
    else{
      setCategory(prev=>[...prev,e.target.value]);
    }
  }
  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy = productsCopy.filter((item)=>category.includes(item.category));
    }
    setFilteredProducts(productsCopy);
  }
  const sortProducts = (criteria)=>{
    let productsCopy = filteredProducts.slice();
    switch(criteria){
      case "low-high":
        setFilteredProducts(productsCopy.sort((a,b)=>a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(productsCopy.sort((a,b)=>b.price - a.price));
        break;
      default:
        applyFilter();
        break;
  }}


  useEffect(()=>{
    applyFilter();
  },[category,search,showSearch])

  useEffect(()=>{
    sortProducts(sortCriteria);
  },[sortCriteria])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Category Filters */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilters(!showFilters)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} className={`h-2 sm:hidden ${showFilters ? 'rotate-90' : ''}`} />
        </p>
         <div className={`border border-gray-300 pl-5 mt-6 py-3 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Hardware"} onChange={toggleCategory} /> Hardware
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Components"} onChange={toggleCategory} />Components
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Accessories"} onChange={toggleCategory} />Accessories
            </p>
          </div>
         </div>
      </div>
      {/* Products Display */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"PRODUCTS"}/> 
          {/* Sorting Options */}
          <select onChange={(e)=>setSortCriteria(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>


        </div>
        {/* Rendering Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filteredProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>

      </div>

  
    </div>
  )
}

export default Collection