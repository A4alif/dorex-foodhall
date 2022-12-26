import React, { useState } from 'react'
import { data } from '../dummydata/Data'

const Food = () => {
    const [foods, setFoods] = useState(data)

    // filter type burgers/pizza
    const filtertype = (cateogry) => {
        setFoods(
            data.filter((item) => {
                return item.category === cateogry;
            })
        )
    }

    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }
  return (
    
    <>
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>To Rated Menu Items</h1>
            {/* filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter type */}
                <div className='mb-4'>
                    <p className='font-bold text-gray-700 mb-4'>Filter Type</p>
                    <div className='flex justify-start flex-wrap gap-3'>
                        <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>All</button>
                        <button onClick={()=> filtertype('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Burgers</button>
                        <button onClick={()=> filtertype('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Pizza</button>
                        <button onClick={()=> filtertype('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>chicken</button>
                        <button onClick={()=> filtertype('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Salads</button>
                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className='font-bold text-gray-700 mb-4'>Filter Price</p>
                    <div className='flex justify-start flex-wrap gap-3'>
                        <button onClick={() => filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$</button>
                        <button onClick={() => filterPrice('$$')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$$</button>
                        
                    </div>
                </div>
            </div>
            {/* display food */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 '>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg ' />
                        <div className='flex justify-between p-4'>
                            <p className='font-bold text-orange-400'>{item.name}</p>
                            <p>
                                <span className='bg-orange-600 text-white rounded-full px-2 py-1' >{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Food