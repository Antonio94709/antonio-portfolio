import { Element } from "react-scroll"
import React from 'react'
import Image from "next/image"

const project = [
    {
        title: "Spotify",
        img: "/image/Solar.jpg"
    },
    {
        title: "Blog",
        img: "/image/Solar.jpg"
    },
    {
        title: "News",
        img: "/image/Solar.jpg"
    }
]

const Projects = () => {

    return (
        <Element id="project" name="project">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                <p className="text-sm uppercase text-gray-400">Portfolio</p>
                <h1 className="">All Projects</h1>
                <div className="md:flex sm:flex-col md:flex-row justify-center items-start gap-10 mt-10 ">

                    {project.map((p, index) => (
                        <div className="rounded w-80 h-60 shadow-xl relative mb-5" >
                            <Image
                                key={index}
                                src={p.img}
                                alt={index}
                                layout="fill"
                                objectFit="cover"
                                className="p-2 rounded cursor-pointer"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </Element>

    )
}

export default Projects