import React from 'react'
import Image from '../Image'
import BannerPromo from '../../assets/bannerPromo.png'

const Banner = () => {
  return (
        <section>
           <a href="https://www.daraz.com.bd/" target='_blank'> <Image src={BannerPromo} className='w-full'/></a>
        </section>
  )
}

export default Banner