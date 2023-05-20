import React, { useEffect, useRef } from 'react';
import useFetchData from '@/useFetchData'
import { useGlobalContext } from '@/context/useContext';
import Image from 'next/image';
import video from '../assets/video.png';
import arrow from '../assets/arrow.png'

const Trending = () => {
    const {moviesdata} = useFetchData('trending', 'all/day');
    const {setCurrent, current} =useGlobalContext()
    const ImagePath = "https://image.tmdb.org/t/p/original";



  return (
    <section className=' w-full min-h-screen -z-50' >
      <article className=' w-w95 m-auto'>
        <div className=' pt-2'>
            <div className='w-full'>

                <div  className=' flex items-center whitespace-nowrap overflow-hidden w-full ' >

                    {
                    moviesdata.slice(0, 7).map((item, index)=>{

                        let position = 'next';

                        if(index === current){
                            position = 'active'
                        }
                        if(index === moviesdata.length - 1){

                            position = 'last'
                        }
                        const image = item.backdrop_path;
                        const date = item.release_date;
                        const tvdate = item.first_air_date;
                        const type = item.media_type;
                        const title = item.title;
                        const tvname = item.name;
                        return(
                                <div className={`${position} w-full transition-all duration-200 ease-linear  slider`} key={index}>
                                    <div className=' relative w-full' >
                                        <Image src={ImagePath + image} alt='movies Image' width={1000} height={1000} priority className=' rounded-3xl w-full h-h80 object-cover image-shadow-box  ' />

                                    </div>

                                    <div className=' absolute -translate-y-28 ml-8 capitalize z-50 font-bold tracking-widest text-base text-white'>

                                        <div  className=' flex gap-2' >
                                            <p>
                                                {date} {tvdate}
                                            </p>
                                            <p className=' flex items-center justify-center gap-1'>
                                                {type}
                                                <span>
                                                    <Image src={video} alt='series icon' className=' w-4 invert' />
                                                </span>
                                            </p>
                                        </div>
                                
                                        <div>
                                            <p>
                                                {title} {tvname}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                      
                        )
                    })
                    }

                </div>
            </div>
            <div className=' flex items-center justify-between gap-2  mt-3'>
                <div>
                    <button type='button' className={`${current === 0? 'hidden' : 'block' }`}>
                    <Image src={arrow} alt='Arrow Icon' className=' w-12 rotate-180 invert cursor-pointer image-shadow-box transition-all duration-500 ease-linear hover:scale-125' onClick={()=> setCurrent(current - 1)} />

                    </button>
                </div>
                <div>
                    <button type='button' className={`${current === moviesdata.slice(0, 7).length -1? 'hidden' : 'block' }`} >
                    <Image src={arrow} alt='Arrow Icon' className=' w-12 h-fit invert cursor-pointer image-shadow-box transition-all duration-500 ease-linear hover:scale-125' onClick={()=> setCurrent(current + 1)}  />

                    </button>
                </div>
            </div>
        </div>
      </article>
    </section>
  )
}

export default Trending