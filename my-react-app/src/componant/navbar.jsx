import React from "react";
import {Link} from 'react-router-dom'

const Navbar=()=>{
   return(
    <>
         <div>
            <div>
                <nav className="">
                    <ul className="flex justify-around bg-purple-600 p-8">
                        <li>
                        <Link className='underline text-white text-2xl' to="/">Home</Link>
                        </li>
                        <li>
                        <Link className="underline text-white text-2xl" to= "/about">about</Link>
                        </li>
                        <li>
                        <Link className='underline text-white text-2xl' to="/product">product</Link>
                        </li>
                        <li>
                            <Link className="underline text-white text-2xl" to="/contact">contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

         </div>
    </>
   )
}
export default Navbar