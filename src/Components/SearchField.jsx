import React,{useState} from 'react';
import useFetchData from '@/useFetchData';
import Image from 'next/image';
import video from '../assets/video.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from '@/context/useContext';


const SearchField = ({ moviesdata, setSearchTerm, searchterm}) => {
    const {searchtoggle, setSearchToggle}= useGlobalContext();
    const ImagePath = "https://image.tmdb.org/t/p/original";
    const router = useRouter();
 
 
  return (
    
    <section className=' w-full min-h-screen pt-1 z-50'>
      <article className=' w-w90 m-auto md:w-w80 bg-primaryColor p-5 rounded-xl shadow-box'>
        <div>
            {
                !searchterm &&
                <div className=' flex items-center justify-center h-96 text-base'>
                    <h1>
                        Please Enter Correct Value
                    </h1>
                </div>
            }
        </div>

        <div className=' grid md:grid-cols-2 items-center justify-start md:justify-center gap-3 ' >

            {
            moviesdata.slice(0, 5).map((item, index)=>{
                const image = item.backdrop_path;
                const date = item.release_date;
                const tvdate = item.first_air_date;
                const type = item.media_type
                const title = item.title
                const tvname = item.name
                return(

                    <div className=' w-w26 hover:scale-105 cursor-pointer shadow-box transition-all duration-500 ease-linear pt-2 pb-2 pl-5 text-gray-600 hover:text-textColor' key={index} >
                        
                        <div className=' flex  gap-2 '>
                            <Image src={ImagePath + image} width={800} height={800} className=' rounded-xl w-16 h-16 md:w-20 md:h-20 object-cover object-center ' alt={title} />

                        <div className=' ml-5 capitalize z-50 font-normal text-xs'>
                            <div className=' s'>
                                <p>
                                    {title} {tvname}
                                </p>
                            </div>
                            <div  className=' text-xs flex gap-2' >
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

                            </div>
                        </div>
                        </div>
                )
            })
            }

        </div>

        {/* <Link href={searchterm?`/search?q=${searchterm}` : `/search?q=${setSearchTerm('')}`}> */}
            <div className=' w-full flex items-center justify-center text-xs mt-3 bg-black p-1 rounded-lg text-gray-600 hover:text-textColor cursor-pointer' onClick={()=>{
                router.push(`/search?keyword=${searchterm}`);
                setSearchTerm('');
                setSearchToggle(false);
            }}>
                <button type="submit">View All Results</button>
            </div>
        {/* </Link> */}
      </article>
    </section>
  )

}

export default SearchField