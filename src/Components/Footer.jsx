import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.svg'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className=' w-full bg-primaryColor mt-20 pb-10'>
        <div className=' w-w95 sm:w-w85 md:w-w80 lg:w-w75 m-auto'>
            <div className=' md:grid grid-cols-2 place-items-center gap-20 lg:gap-40 pt-20'>
                <div className=' flex flex-col items-center justify-center gap-5'>

                    <div className='flex flex-col items-center justify-center '>
                        <Image src={logo} alt='logo icon' className=' w-36' />

                    </div>
                    <div className='-mt-2'>
                        <p className=' text-xxs'>
                            MoviesStudio is top of free streaming website, where to watch movies online free without registration required. With a big database and great features, we're confident MoviesStudio is the best free movies online website in the space that you can't simply miss!
                        </p>
                        <p>
                            <a href="https://twitter.com/" className=' flex items-center justify-center gap-2 text-blue-400'>
                                <span><Icon icon="ri:twitter-fill" /></span>
                                Conect with us on twitter
                            </a>
                            <em className=' text-xxs'>
                                This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                            </em>
                        </p>
                    </div>

                </div>

                <div className=' flex flex-col items-start md:items-center justify-center pt-4 font-medium'>
                    <div>
                        <p>
                            Links
                        </p>
                    </div>
                    <div className=' flex items-start justify-start gap-44 pt-2 text-xxs sm:gap-56'>
                        <div className=' flex flex-col gap-1 md:gap-5'>
                            <p className='hover:text-Color cursor-pointer'>
                                Movies
                            </p>
                            <p className='hover:text-Color cursor-pointer'>
                                Tv-Shows
                            </p>
                            
                        </div>
                        <div className=' flex flex-col gap-1 md:gap-5 '>
                            <p className='hover:text-Color cursor-pointer'>
                                Action Movies
                            </p>
                            <p className='hover:text-Color cursor-pointer'>
                                Horror Movies
                            </p>
                            <p className='hover:text-Color cursor-pointer'>
                                Sci-fi Movies
                            </p>
                            <p className='hover:text-Color cursor-pointer'>
                                Thriller Movies
                            </p>
                            
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </footer>
  )
}

export default Footer