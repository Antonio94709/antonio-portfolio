import React from 'react'
import { Element } from 'react-scroll'


const skill = [
    {
        title: "fron-end ",
        lang: {
            react: "react",
        }
    }
]

const Skills = () => {
    return (
        <Element id="skills" name="skills">
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>MY Skills</p>
                <h2 className='text-indigo-900 text-6xl font-bold text-ceter'>Languages I worked with</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
                <div>
                    <p className='text-indigo-900 text-4xl font-bold'>Front-end</p>
                    <div>
                        <ul className='font-bold'>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Ionic framework</li>
                            <li>Tailwind</li>
                            <li>Recoil</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-indigo-900 text-4xl font-bold'>Back-end</p>
                    <div>
                        <ul className='font-bold'>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Mysql</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </Element>
    )
}

export default Skills