import React from 'react';
import home from '../assets/home.png'
import movie from '../assets/movie.png'
import bookmark from '../assets/bookmark.png'
import series from '../assets/series.png'
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';

const LangeNavLinks = ({setSearchToggle}) => {
  return (
     <div className=' md:flex items-center justify-center  hidden'>

            <div className=' flex gap-10 items-center justify-center text-sm'>

                <div className='hover:text-Color '>
                    
                    <span>
                        <Link href={`/home`}>
                            Home
                        </Link>
                    </span>

                </div>

                <div className=' hover:text-Color '>

                    <span>
                        <Link href={'/movie'}>
                            Movies
                        </Link>
                    </span>

                </div>
                <div className='  hover:text-Color'>
                    
                    <span>
                        <Link href={'/tv'}>
                            Tv-Shows
                        </Link>
                    </span>

                </div>
                {/* <div className=' flex items-center justify-left gap-4'>
                    
                        <Link href={'/bookmark'}>
                            <span>
                            BoookMark
                            </span>
                        </Link>
                </div> */}

            </div>
    </div>
  )
}

export default LangeNavLinks