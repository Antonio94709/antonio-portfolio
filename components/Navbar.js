import React, { useState } from 'react'
import { Transition } from "@headlessui/react"
import { Link } from "react-scroll"
// import Link from 'next/link'
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const Navbar = () => {
    const [isOpen, setIsOPen] = useState(false)
    return (
        <div>
            <nav className='fixed z-20 bg-white w-full'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className=''>
                                    Antons Portfolio
                                </h1>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link href="#" activeClass="Home" smooth={true} offset={50} duration={500} className="cursor-pointer text-blue-600 px-3 py-2 text-md">Home</Link>
                                    <Link href="#" className="hover:text-blue-500 active:text-blue-500">Services</Link>
                                    <Link href="#" className="hover:text-blue-500 active:text-blue-500">Projects</Link>
                                    <Link href="#" className="hover:text-blue-500 active:text-blue-500">Contact Me</Link>
                                </div>
                            </div>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>
                                    Say<span className='text-blue-500'>hi</span>
                                </h1>
                            </div>
                        </div>
                        <div className='mr-14 flex md:hidden'>
                            <button onClick={() => setIsOPen(!isOpen)} className='bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white ' aria-controls='mobile-menu' aria-expanded="false" type='button'>
                                <span className='sr-only'>Open main menu</span>
                                {!isOpen ? (<MenuIcon className='w-5 h-5' />) : (<XIcon className='w-5 h-5' />)}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition show={isOpen} enter="transition ease-out duration-100 transfrom" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='transiton eas-in duration-75 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                    {(ref) => (
                        <div className='md:hidden' id="mobile-menu">
                            <div ref={ref} className="bg-white flex flex-col mx-4 mr-20 pt-4 pb-4 space-y-1">
                                <Link href="#" activeClass="Home" smooth={true} offset={50} duration={500} className="cursor-pointer text-blue-600 px-3 py-2 text-md">Home</Link>
                                <Link href="#" className=" px-3 py-2 text-md hover:bg-blue-500 hover:text-white rounded-lg active:text-blue-500">Services</Link>
                                <Link href="#" className=" px-3 py-2 text-md hover:bg-blue-500 hover:text-white rounded-lg ">Projects</Link>
                                {/* <Link href="#" className=" px-3 py-2 text-md hover:bg-blue-500 hover:text-white rounded-lg ">Contact Me</Link> */}
                                <Link href="#" className=" px-3 py-2 text-md hover:bg-blue-500 hover:text-white rounded-lg ">Say <span className='active:text-black'>hi</span></Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}

export default Navbar