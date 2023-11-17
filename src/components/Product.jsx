import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

  const {title, description, price, image} = post;
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from cart");
  }

  return (
    <div className='md:group md:hover:scale-110 transition duration-300 md:ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 rounded-xl'>
      <div>
        <p className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-left'>{title}</p>
      </div>
      <div className='w-full'>
        <p className='max-w-[90%] mx-auto md:w-40 text-gray-400 font-normal text-[10px] text-left'>{description.split(" ").slice(0,10).join(" ")}...</p>
      </div>
      <div className='h-[180px]'>
        <img className='h-full w-full object-contain' src={image} alt="img" />
      </div>
      <div className='flex items-center justify-between w-full mt-5'>
        <p className='text-green-600 font-semibold'>${price}</p>
      
        {/* cart item hai to add ka button dikhana hai nahi to remove ka dikhana hai 
          some() method checks if at least one element in the cart array satisfies the condition specified in the provided function
        */}
        {
          cart.some((p) => p.id === post.id) ? (
            <button className='md:group-hover:bg-gray-700 md:group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={removeFromCart}>Remove Item</button>
          ) : (
            <button className='md:group-hover:bg-gray-700 md:group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={addToCart}>Add to Cart</button>
          )
        }
      </div> 
    </div>
  )
}

export default Product