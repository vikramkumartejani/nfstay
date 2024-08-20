import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='shadow-custom'>
        <div>

        </div>
        <Image src='/assets/hero.svg' alt='hero' width={400} height={400} />
    </div>
  )
}

export default Hero