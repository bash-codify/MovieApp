import React from 'react';
import useFetchData from '@/useFetchData';
import Image from 'next/image';
import video from '../assets/video.png'
import { useGlobalContext } from '@/context/useContext';
import { Icon } from '@iconify/react';


const BookMark = () => {
     
    const {bookmark} = useGlobalContext();


  const { removeFromBookmark} = useGlobalContext()


    const removeItemFromBookmark = (item) => {
        removeFromBookmark(item);
    }


    const ImagePath = "https://image.tmdb.org/t/p/original"
    
  return (
    <section className=' w-full'>
      <article className=' w-w95 m-auto'>
        <div>
            <div className='pt-6 text-base font-semibold tracking-wider'>
                <h1>
                    Bookmarks
                </h1>
            </div>
            <div className=' pt-6'>

                {
                   bookmark.length == 0 &&
                    <div className=' flex items-center justify-center h-96 text-sm'>
                        <p>
                            You are yet to bookmark any movies / series
                        </p>
                    </div>
                }


                <div className=' grid grid-cols-fluid gap-6 sss:gap-y-8' >

                    {
                    bookmark.map((item, index)=>{
                        const image = item.backdrop_path;
                        const date = item.release_date;
                        const type = item.media_type
                        const title = item.title
                        return(

                            <div key={index}   >
                              
                                <div className=' grid gap-2'>
                                    <Image src={ImagePath + image} alt='movies Image' width={800} height={800} className=' rounded-3xl w-full sss:w-72 h-72 object-cover object-center hover:scale-105 cursor-pointer image-shadow-box transition-all duration-500 ease-linear'  />

                                    <div className=' absolute mt-2 ml-3 text-base w-8 h-8 bg-bgColor rounded-full flex items-center justify-center cursor-pointer text-red-600' 
                                            onClick={() => removeItemFromBookmark(item)}
                                        >
                                            <Icon icon="material-symbols:close-rounded" />
                                        </div>

                                </div>

                                <div className=' ml-5 capitalize z-50 font-medium text-xs pt-4'>
                                    <div className=' w-full flex items-center'>
                                        <div  className=' flex gap-2' >
                                            <p>
                                                {date}
                                            </p>
                                            <p className=' flex items-center justify-center gap-1'>
                                                {type}
                                                <span>
                                                    <Image src={video} alt='series icon' className=' w-4 invert' />
                                                </span>
                                            </p>
                                        </div>
                                        

                                    </div>

                                  
                                    <div>
                                        <p>
                                            {title}
                                        </p>
                                    </div>

                                    </div>
                                </div>
                        )
                    })
                    }

                </div>
            </div>
        </div>
      </article>
    </section>
  )
}

export default BookMark