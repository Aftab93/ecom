import React from 'react'
import footerLogo from '../../assets/logo.png'
import Banner from '../../assets/website/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom", // typo fixed
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};


const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact",
    },
    {
        id: 4,
        title: "Blog",
        link: "/#Blog",
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                   <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                    <img src={footerLogo} alt="" 
                    className='max-w-[50px]'
                    />
                    SwiftCart</h1> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi est, quae saepe consectetur quia?</p>
                </div>

                {/* Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1
                            className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                            >Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li key={link.id}>
                                    <a href={link.link} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        {link.title}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* social links */}
                    <div>
                       <div className="flex items-center gap-3 mt-6">
                            <a href="#" className="hover:text-primary transition-all duration-300">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#" className="hover:text-primary transition-all duration-300">
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="#" className="hover:text-primary transition-all duration-300">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div> 
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Punjab, Pakistan</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+92 3000000123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer