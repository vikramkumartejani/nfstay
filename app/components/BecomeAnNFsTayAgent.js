import Image from 'next/image'
import React from 'react'

const BecomeAnNFsTayAgent = () => {
  return (
    <div>
        <h2 className='text-[#0C0839] text-[25px] sm:text-[32px] font-bold font-jakarta leading-[40px] tracking-[-0.02em] mb-7 sm:mb-10'>Become an NFsTay Agent</h2>
        <div className='bg-[#F7F6FF] rounded-[14px] w-full pt-[22px] px-4 sm:px-5'>
            <div className='max-w-[1000px] mx-auto w-full flex md:items-center md:flex-row flex-col justify-between'>
                <div>
                    <h2 className='text-[#0C0839] text-[30px] sm:text-[40px] sm:leading-[60px] font-bold font-jakarta'>We are hiring</h2>
                    <p className='text-[#0C0839] text-[16px] sm:text-[20px] leading-[24px] font-jakarta font-normal mt-3.5'>Looking for Agents to join our team</p>
                    <button className='mt-3.5 bg-[#954AFC] w-[170px] h-[45px] rounded-[104px] text-white text-[16px] font-semibold font-jakarta leading-[20px]'>Apply NOW!</button>
                    <div className='flex items-center gap-3 border-t border-[#0C0839] border-opacity-20 pt-5 pb-5 mt-5'>
                        <Image src='/assets/profilez.svg' alt='profiles' width={84} height={46}/>
                        <p className='text-[#0C0839] text-[14px] sm:text-[16px] leading-[23px] font-medium font-jakarta'>Join <span className='font-extrabold'>200+</span> others who signed up</p>
                    </div>
                </div>
                <Image src='/assets/we-are-hiring.svg' alt='we-are-hiring' width={450} height={400} />
            </div>
        </div>
    </div>
  )
}

export default BecomeAnNFsTayAgent