import axios from 'axios';
import { Icon } from '@iconify/react';
import video from '../../assets/video.png';
import Image from 'next/image';
import Link from 'next/link';
import MoreMovies from '@/Components/MoreMovies';


const MovieDetails = ({ data }) => {
   const ImagePath = "https://image.tmdb.org/t/p/original";

 
  return (

    <section className=' w-full min-h-screen'>
      <article className=' w-w95 m-auto'>
        
        <div className=' pt-5'>
         
          {
        
            data.map((item, index) => {

              const image = item.poster_path;
              const desc = item.overview;
              const vote = item.vote_average;
              const count = item.vote_count;
              const runtime = item.runtime;
              const production = item.production_companies;
              const country = item.production_countries;
              const genre = item.genres;
              const date = item.release_date;
              // const date2 = item.original_date;
              // const type = item.media_type;
              // const name = item.name;
              const title = item.title;

               return(
                <>

                <div className=' flex gap-5 items-center justify-left'>
                  <Link href={'/home'}>Home</Link> /
                  <Link href={'/movie'}>Movies</Link> /
                  <p>
                    {title}
                  </p>
                  
                </div>
                          
                    <div className=' pt-5' key={index}>
                      
                        <div className=' grid gap-2'>
                        
                            <Image src={ImagePath + image} alt='movies Image' width={1000} height={1000} className=' rounded-md w-full h-h85 object-cover object-center  image-shadow-box'/>
                  
                        </div>

                        <div className='grid items-start justify-start lg:grid-cols-fluid gap-6 pt-10'>

                          <div className=' flex flex-col items-left justify-center gap-4'>

                            <div>
                              <h1 className=' text-lg'>
                                {title}
                              </h1>
                              <div className=' flex gap-2 italic text-xs'>
                              <p>
                                {vote} of {count}
                              </p>
                              <p>
                                {runtime} min
                              </p>

                              </div>
                            </div>
                            <div>
                              <p className='italic text-xs'>
                                {
                                  desc
                                }
                              </p>
                            </div>
                            <div>
                              {
                                country.map((item)=>{
                                  return(
                                    <p>
                                    Country: <span className=' italic text-xs'>{item.name}</span>
                                  </p>
                                  )
                                })
                              }
                              
                              
                            </div>
                            <div className=' flex gap-2'>
                              <p>
                                Genre:
                              </p>
                              {
                                genre.map((item)=>{
                                  return(
                                  
                                    <span className=' italic text-xs'>{item.name}</span>
                                
                                  )
                                })
                              }
                          
                            </div>
                            <div>
                            
                              <p>
                                Release: <span className=' italic text-xs'>{date}</span> 
                              </p>

                            </div>
                            <div className=' flex gap-2'>
                              <p>
                                Production:
                              </p>
                              {
                                production.map((item)=>{
                                  return(
                                  <span className=' italic text-xs'>{item.name}</span>
                                  
                                  )
                                })
                              }
                              
                            </div>

                          </div>

                          <div >
                            <MoreMovies/>
                          </div>

                        </div>

                    </div>

                  </>
                       
                  )
              })
              }
              
        </div>

      </article>
    </section>
  )
}

export default MovieDetails;

export const getServerSideProps = async ({ params }) => { 
  
  console.log(params);
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.NEXT_PUBLIC_APi_KEY}`);

  const data = await resp.data;

  return {
    props: { data: [ data ] }
  }
}