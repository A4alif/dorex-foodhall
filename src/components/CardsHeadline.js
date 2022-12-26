import React from 'react'

const CardsHeadline = () => {
  return (
    <>
        <div className='max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 gap-6 '>
            {/* card */}
            <div className='rounded-lg relative'>
                {/* overlay on card */}
                <div className='absolute w-full h-full bg-black/50 rounded-lg text-white'>   
                    <p className='font-bold text-2xl px-2 pt-4'>Sun't Out Bogo's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='rounded-xl mx-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* card */}
            <div className='rounded-lg relative'>
                {/* overlay on card */}
                <div className='absolute w-full h-full bg-black/50 rounded-lg text-white'>   
                    <p className='font-bold text-2xl px-2 pt-4'>Delivered Steak</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='rounded-xl mx-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* card */}
            <div className='rounded-lg relative'>
                {/* overlay on card */}
                <div className='absolute w-full h-full bg-black/50 rounded-lg text-white'>   
                    <p className='font-bold text-2xl px-2 pt-4'>Cooking Bakery</p>
                    <p className='px-2'>Tasty Treat</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='rounded-xl mx-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </>
  )
}

export default CardsHeadline