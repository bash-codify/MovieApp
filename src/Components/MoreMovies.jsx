import React from 'react';
import useFetchData from '@/useFetchData';
import Image from 'next/image';
import video from '../assets/video.png';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '@/context/useContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const MoreMovies = () => {

   

  const {moviesdata} = useFetchData('discover', 'movie');
  const {addToBookmark, removeFromBookmark, bookmark, isBookmarkItem} = useGlobalContext()
    const ImagePath = "https://image.tmdb.org/t/p/original";
    
    const addItemToBookmark = (item) => {
        addToBookmark(item);
    }
       const removeItemFromBookmark = (item) => {
        removeFromBookmark(item);
    }



  return (
    <section className=' w-full min-h-screen'>
      <article className=' w-full m-auto'>
        <div>
            <div className=' text-base font-semibold tracking-wider'>
                <h1>
                    You may also like
                </h1>
            </div>
            <div className=' pt-6'>
                <div className='relative grid grid-cols-fluid2 sss:grid-cols-fluid sss:gap-6 gap-4 sss:gap-y-8' >

                    {
                    moviesdata.map((item, index)=>{
                        const image = item.backdrop_path;
                        const date = item.release_date;
                        const tvdate = item.first_air_date;
                        const type = item.media_type
                        const title = item.title
                        const tvname = item.name
                        const id = item.id
                        // const route = router.push(`/movie${id}`)
                        // console.log(item)
                        
                        return(

                             

                                <div key={index}>
                                
                                    <div className='  grid gap-2'>
                                        <Link href={`/${type}/${id}`}>
                                            <Image src={ImagePath + image} alt='movies Image' width={1000} height={1000} priority className='  rounded-3xl w-full sss:w-72 h-72 object-cover object-center hover:scale-105 cursor-pointer image-shadow-box transition-all duration-500 ease-linear'  />
                                        </Link>

                                       { !isBookmarkItem(item) ? (
                                            <div className=' absolute mt-2 ml-3 text-base w-8 h-8 bg-bgColor rounded-full flex items-center justify-center cursor-pointer' 
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

                                    <div className=' ml-5 capitalize z-50 font-medium text-xs pt-4'>
                                        <div  className=' flex gap-2' >
                                            {
                                            <p>
                                                {date} {tvdate}
                                            </p>

                                            }
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

                        // </Link>
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

export default MoreMovies


// export const getServerSideProps =  async () =>{


//         const resps = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_APi_KEY}&language=en-US&page=1&include_adult=false`);
//         const data = await resps.data.results
        

//     return{
//         props:
//         {
//             data:data
//         }
//     }
    
// }