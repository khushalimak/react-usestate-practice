import React from 'react'
import Navbar from '../componant/navbar.jsx'
import Image from '../assets/asset 2.png'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-2xl mt-12'>
                <div className="flex justify-between">
                    <div className="w-[700px]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae veritatis alias ad omnis sapiente perspiciatis dolorum error maxime, dicta asperiores fuga id, quod nam numquam! Ullam ratione officia vero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et minus ipsam vitae fugit soluta iste cupiditate dolores aliquam nesciunt commodi, alias, unde veritatis assumenda blanditiis! Nesciunt dolor aliquid quae accusamus, iure eligendi laudantium sit voluptate sunt unde illo quos, nihil illum quaerat? Quo voluptatum impedit accusantium delectus ab mollitia numquam! Earum maiores laudantium iusto natus doloribus modi, nobis mollitia aliquid, atque numquam aspernatur, eum consequuntur. Consectetur rerum corrupti repellendus consequatur porro provident saepe nostrum, temporibus omnis, dolorum, pariatur dolor sed maxime aspernatur voluptatem? Recusandae reiciendis iure dolore deleniti officia accusantium harum labore, magnam </p>
                    </div>
                    <div className="w-96">
                        <img src={Image} className="w" alt="" />
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Home