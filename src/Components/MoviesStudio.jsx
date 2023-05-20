import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg'
import { Icon } from '@iconify/react';
import Link from 'next/link';

const MoviesStudio = () => {
  return (
    <section className=' w-full min-h-screen'>
        <article className=' w-w95 m-auto sm:w-w85 md:w-w80 lg:w-w75'>
            <div className=' flex flex-col items-center justify-center h-screen gap-5'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div>
                        <Image src={logo} alt=' logo icon' />
                    </div>
                    <div className='flex gap-5 items-center justify-center '>

                        <div className=' flex gap-2 items-center justify-center w-7 h-7 bg-blue-800 text-sm hover:-translate-y-1 transition-all duration-300 ease-linear cursor-pointer sm:w-28'>
                            <Icon icon="ri:facebook-fill" />
                            <small className=' hidden sm:block text-xs'>Facebook</small>
                        </div>
                        <div className=' flex gap-2 items-center justify-center w-7 h-7 bg-blue-400 text-sm hover:-translate-y-1 transition-all duration-300 ease-linear cursor-pointer sm:w-28'>
                            <Icon icon="ri:twitter-fill" />
                            <small className=' hidden sm:block text-xs'>Twitter</small>
                        </div>
                        <div className=' flex gap-2 items-center justify-center w-7 h-7 bg-red-500 text-sm hover:-translate-y-1 transition-all duration-300 ease-linear cursor-pointer sm:w-28'>
                            <Icon icon="ant-design:instagram-filled" />
                            <small className=' hidden sm:block text-xs'>Instagram</small>
                        </div>
                        <div className=' flex gap-2 items-center justify-center w-7 h-7 bg-blue-600 text-sm hover:-translate-y-1 transition-all duration-300 ease-linear cursor-pointer sm:w-28'>
                            <Icon icon="cib:telegram-plane" />
                            <small className=' hidden sm:block text-xs'>Telegram</small>
                        </div>
                        <div className=' flex gap-2 items-center justify-center w-7 h-7 bg-black text-sm hover:-translate-y-1 transition-all duration-300 ease-linear cursor-pointer sm:w-28'>
                            <Icon icon="simple-icons:tiktok" />
                            <small className=' hidden sm:block text-xs'>Tiktok</small>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <h2 className=' text-base'>
                        Watch Movies Online Free
                    </h2>
                    <p>
                        MoviesStudio - Just a better place to watch movies online for free. It allows you to watch movies online in high quality for free. No registration is required. The content is updated daily with fast streaming servers, multi-language subtitles supported. Just open MoviesStudio.com and watch your favorite movies, tv-shows. We have almost any movie, tv-shows you want to watch!
                        Please help us by sharing this site with your friends. Thanks!
                    </p>
                    <p>
                        <a href="https://twitter.com/" className=' flex items-center justify-center gap-2 text-blue-400'>
                            <span><Icon icon="ri:twitter-fill" /></span>
                            Conect with us on twitter
                        </a>
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center border border-Color w-40 pt-3 pb-3 hover:border-2 cursor-pointer rounded-md text-Color hover:scale-105 font-medium'>
                    <Link href='/home'>
                        <button type='button'>
                            Home
                        </button>

                    </Link>
                </div>

            </div>
        </article>
    </section>
  )
}

export default MoviesStudio