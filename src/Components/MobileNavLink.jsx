import React from 'react';
import home from '../assets/home.png'
import movie from '../assets/movie.png'
import bookmark from '../assets/bookmark.png'
import series from '../assets/series.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from '@/context/useContext';


const MobileNavLink = () => {
    const {setMenuToggle} = useGlobalContext();
    const router = useRouter();

  return (

    <div className=' md:hidden'>
        <div className='flex items-center justify-left bg-primaryColor w-52 h-60 rounded-3xl shadow-box z-50'>

            <div className=' flex items-left justify-center gap-6 flex-col text-sm pl-10'>

                <div href="" className=' flex items-center justify-left gap-4 hover:scale-110 transition-all duration-300 ease-linear'>
                    
                    <div className=' flex items-center justify-left gap-3 cursor-pointer' onClick={()=>{
                        router.push(`/home`)
                        setMenuToggle(false)
                    }}>
                        <span>
                            <Image src={home} alt='home icon' className=' w-7 invert ' />
                        </span>
                        <span>
                            Home
                        </span>
                    </div>
                    
                </div>
                <div href="" className=' flex items-center justify-left gap-4 hover:scale-110 transition-all duration-300 ease-linear'>
                    <div className=' flex items-center justify-left gap-3 cursor-pointer' onClick={()=>{
                        router.push(`/movie`)
                        setMenuToggle(false)
                    }}>
                        <span>
                            <Image src={movie} alt='movies icon' className=' w-7 invert ' />
                        </span>
                        <span>
                            Movies
                        </span>

                    </div>

                </div>
                <div href="" className=' flex items-center justify-left gap-4 hover:scale-110 transition-all duration-300 ease-linear'>
                    <div className=' flex items-center justify-left gap-3 cursor-pointer' onClick={()=>{
                        router.push(`/tv`)
                        setMenuToggle(false)
                    }}>
                        <span>
                            <Image src={series} alt='series icon' className=' w-7 invert ' />
                        </span>
                        <span>
                            Series
                        </span>
                    
                    </div>
                    
                </div>
                <div href="" className=' flex items-center justify-left gap-4 hover:scale-110 transition-all duration-300 ease-linear'>
                    <div className=' flex items-center justify-left gap-3 cursor-pointer' onClick={()=>{
                        router.push(`/bookmark`)
                        setMenuToggle(false)
                    }}>
                        <span>
                            <Image src={bookmark} alt='bookmark icon' className=' w-7 invert ' />
                        </span>
                        <span>
                            Bookmarks
                        </span>
                    
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default MobileNavLink