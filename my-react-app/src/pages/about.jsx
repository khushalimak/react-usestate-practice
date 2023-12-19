
import React from 'react'
import Navbar from '../componant/navbar.jsx'
import Image from '../assets/asset 2.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <Navbar />
            <h1 className='text-2xl mt-12'>
            <h1>This is About Page</h1>
                <div className="flex justify-between">
                    <div className="w-[700px]">
                        <p>
                        </p>
                    </div>
                    <div className="w-96">
                        <img src={Image} className="w" alt="" />
                    </div>
                </div>
                <Link to="/">Go to Home Page</Link>
            </h1>
    </div>
  )
}

export default About