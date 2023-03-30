import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    ArrowPathIcon,
    Bars3Icon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
    XMarkIcon,
    LinkIcon,
    ArrowRightIcon
  } from '@heroicons/react/24/outline'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  const sliders = [
    {
        title:'Codepyramids',
        link:'codepyramids.vercel.app',

        desc: 'A Programming School, to teach coding to kids',
        tags:['uiux', 'vuejs','tailwind'],
        img:'/images/eduqode.png'
    },
    {
        title:'Raiseberry',
        link:'/images/raiseberry.png',
        desc: 'A Quiz School, to teach coding to kids',
        tags:['reactjs', 'vuejs','figma']

    },
    {
      title:'Primo',
      link:'codepyramids.vercel.app',

      desc: 'A Programming School, to teach coding to kids',
      tags:['uiux', 'vuejs','tailwind'],
      img:'/images/primo.png'
  },
  {
      title:'NanTwist:',
      link:'https://naantwist.com/',
      desc: 'A Quiz School, to teach coding to kids',
      tags:['reactjs', 'tailwind','laravel'],
      img:'/images/nans.png'

  },
  ]

  

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            sliders.map(({title, link, desc, tags, img}) => (
                <SwiperSlide >
                <div className="h-32 w-full border-2 border-emerald-300">
                <img className="object-cover" src={img} alt="" />
                     
                </div>
                     <div className="px-2 py-3  text-left">
                         <div className="flex items-center gap-2"> <div className="h-2 w-2 bg-green-500  rounded-full"></div> <h1 className="text-sm font-medium">{title}</h1></div>
                     </div>
                     <div className="px-2 py-1  text-left">
                         
                          <a href={link} className="text-sm flex items-center gap-2 parent font-medium  px-2 text-emerald-600 rounded-full"> <LinkIcon className="h-4 w-4" /> {title} <ArrowRightIcon className="h-4 w-4 " /></a>
                    <p className="text-sm pt-3 text-left font-normal">
                     {desc}
                    </p>
                     </div>

                     <div className="mr-auto px-2 mt-2 flex gap-4 items-center ">
                        {
                            tags?.map((tag) => (
                             
                                <span className="px-2 py-1 bg-emerald-100 rounded-full text-xs text-emerald-600" >{tag}</span>
                            ))
                        }
                      
                     </div>
                     </SwiperSlide> 
            ))
        }
       
            
             
      </Swiper>

     
    </>
  );
}
