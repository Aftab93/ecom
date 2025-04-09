import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import { FaStar } from 'react-icons/fa6'
import SectionHeader from '../Common/SectionHeader'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        author: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        author: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        author: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirts",
        rating: 4.4,
        author: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Fashion T-Shirts",
        rating: 4.5,
        author: "Pink",
        aosDelay: "800",
    },
]

const Products = () => {
  return (
    <div className='pt-14 pb-12 dark:bg-gray-900'>
        <div className='container'>
            {/* Header Section */}
            <SectionHeader
                smallText="Top Selling Products for you"
                heading="Products"
                subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam obcaecati voluptatibus temporibus."
            />
            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card sections */}
                    {
                        ProductsData.map((data) => (
                            <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3'>
                            <img src={data.img} alt={data.title} className='h-[220px] w-[150px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold dark:text-white'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>Color: {data.author}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='dark:text-white'>{data.rating}</span>
                                </div>
                            </div>
                            
                            
                            </div>
                        ))
                    }

                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products