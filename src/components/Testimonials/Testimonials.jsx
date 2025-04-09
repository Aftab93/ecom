import React from 'react'
import SectionHeader from '../Common/SectionHeader'
import Slider from "react-slick"


const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo temporibus impedit minima voluptatem quas molestiae architecto asperiores nobis esse",
        img: "http://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Andy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo temporibus impedit minima voluptatem quas molestiae architecto asperiores nobis esse",
        img: "http://picsum.photos/101/102",
    },
    {
        id: 3,
        name: "Sara",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo temporibus impedit minima voluptatem quas molestiae architecto asperiores nobis esse",
        img: "http://picsum.photos/101/103",
    },
    {
        id: 4,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo temporibus impedit minima voluptatem quas molestiae architecto asperiores nobis esse",
        img: "http://picsum.photos/101/104",
    },
    {
        id: 5,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo temporibus impedit minima voluptatem quas molestiae architecto asperiores nobis esse",
        img: "http://picsum.photos/101/105",
    },
]
const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            },
        ]
    }

  return (
    <div className='py-10 dark:bg-gray-900'>
        <div className='container'>
            {/* headr section */}
            <SectionHeader
            smallText="What our customers are saying"
            heading="Testimonials"
            subText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"
            />
            {/* Testimonials Card */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {
                        TestimonialData.map((data) => (
                            <div className='my-6'>
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                    <div>
                                    <img src={data.img} alt="" className='rounded-full w-20 h-20' /> 
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-400'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                        </div>
                                        
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                </div>
                            </div>
                            
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials