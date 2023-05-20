import React from 'react';
import useFetchData from '@/useFetchData';
import Image from 'next/image';
import video from '../assets/video.png'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useGlobalContext } from '@/context/useContext';


const SerieList = () => {

  const {moviesdata} = useFetchData('tv', 'popular');

  const {addToBookmark, removeFromBookmark, isBookmarkItem} = useGlobalContext()
    const ImagePath = "https://image.tmdb.org/t/p/original";
    
    const addItemToBookmark = (item) => {
        addToBookmark(item);
    }

    const removeItemFromBookmark = (item) => {
        removeFromBookmark(item);
    }
    
  return (
    <section className=' w-full min-h-screen'>
      <article className=' w-w95 m-auto'>
        <div>
            <div className='pt-6 text-base font-semibold tracking-wider'>
                <h1>
                    Tv-Series
                </h1>
            </div>
            <div className=' pt-6'>
                <div className=' grid grid-cols-fluid gap-6 sss:gap-y-8' >

                    {
                    moviesdata.map((item, index)=>{
                        const image = item.poster_path;
                        const date = item.first_air_date;
                        const date2 = item.original_date;
                        const type = item.media_type
                        const name = item.name
                        const title = item.title
                        const id = item.id
                      
                        return(
                            

                            <div key={index}   >
                              
                                <div className=' grid gap-2'>
                                    <Link href={`/tv/${id}`}>
                                
                                        <Image src={ImagePath + image} alt='movies Image' width={1000} height={1000} priority className=' rounded-3xl w-full sss:w-72 h-72 object-cover object-center hover:scale-105 cursor-pointer image-shadow-box transition-all duration-500 ease-linear'/>
                                    </Link>
                                { !isBookmarkItem(item) ? (
                                            <div className=' absolute mt-2 ml-3 text-base w-8 h-8 bg-bgColor rounded-full flex items-center justify-center cursor-pointer ' 
                                                onClick={() => addItemToBookmark(item)}
                                            >
                                                <Icon icon="material-symbols:bookmark" />
                                            </div>
                                        ) : (
                                            <div className=' absolute mt-2 ml-3 text-base w-8 h-8 bg-bgColor rounded-full flex items-center justify-center cursor-pointer text-red-600'  
                                                onClick={() => removeItemFromBookmark(item)}
                                            >
                                                <Icon icon="material-symbols:close-rounded" />
                                            </div>
                                        ) }
                                
                            </div>
                                <div className=' ml-5 capitalize z-50 font-medium text-xs'>
                                    <div  className=' flex gap-2' >
                                        <p>
                                            {date} {date2}
                                        </p>
                                        <p className=' flex items-center justify-center gap-1'>
                                            {type} Tv
                                            <span>
                                                <Image src={video} alt='series icon' className=' w-4 invert' />
                                            </span>
                                        </p>
                                    </div>

                                  
                                    <div>
                                        <p>
                                            {title} {name}
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

export default SerieList