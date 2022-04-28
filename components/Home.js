import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Home = () => {
    return (
        <div className="">
            <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
                <div className='w-3/4 h-96 shadow-xl rounded-full  relative px-10 hidden md:block'>
                    <Image
                        src="/image/solar.jpg"
                        priority
                        alt="heroimage"
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full relative px-10 hidden md:block' />
                </div>
                <div className='flex flex-col md:ml-20 mx-10 mt-10'>
                    <h1 className='font-bold text-7xl text-left mb-5'>
                        Front-end developer
                    </h1>
                    <p className='text-left font-normal mb-5 flex-wrap'>ewjf je ;fjew ewjf weijoijf weijoijf; ew;f iwei weijoijf
                        o ipewif0ewi fjew
                        feo fipo mf0emw falsewljk fejp;f 
                    </p>
                    <a href="#" className="font-semibold text-white md:mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">
                        See my Portfolio !
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home 