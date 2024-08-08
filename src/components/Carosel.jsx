import React from 'react';
import image1 from "../../public/images/Ant-Design.jpg"
import image2 from "../../public/images/eeac607b-38a8-4d5f-936d-5fa8e797a79d-cover.png"
// import image3 from "../../public/images/images.jfif"
import { Carousel } from 'antd';
import Image from 'next/image';
import Hero from './Hero';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carosel = () => (
  <Carousel  arrows autoplay>
    <div className=''>
    <Hero/>
    </div>
    <div className=''>
    <Hero/>
    </div>
    <div className=''>
    <Hero/>
    </div>
    
    
  </Carousel>
);
export default Carosel;