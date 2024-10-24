import React from 'react'
import Image from 'next/image'

const user = {
        title:"Hi, I am John, Creative Technologist",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        imgurl: "../app/images/profileimg.png",
    }


const HeroSection = () => {
  return (
    <div className='flex flex-row p-8'>
    <div>
    <h1>{user.title}</h1>
    <p>{user.description}</p>
    </div>
    <div>
        <Image 
        src={user.imgurl}
        width={500}
      height={500}
      alt="Picture of the author"
        />
    </div>

    </div>
  )
}

export default HeroSection