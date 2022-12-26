import React from 'react'
import notFound from '../img/notfound.jpg'
import { AiFillHome } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/')
    },4000)
  return (
    <>
        <div className='max-w-[1640px] mx-auto py-12 px-4'>
            <img className='max-h-[600px] mx-auto ' src={notFound} alt="" />
            <div className='flex justify-center'>
            <Link to={'/'}><button className="flex items-center gap-2 py-2 px-6 bg-blue-600 text-white duration-300 border-blue-600 hover:bg-transparent hover:text-black">
              <AiFillHome size={20} /> Go Home
            </button></Link>
            </div>
        </div>
    </>
  )
}

export default NotFound