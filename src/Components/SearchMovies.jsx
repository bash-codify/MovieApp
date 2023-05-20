'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import search from '../assets/search.png'
import useFetchData from '@/useFetchData';
import SearchField from './SearchField';
import { useRouter } from 'next/router';
import SearchList from './SearchItem';
import { useGlobalContext } from '@/context/useContext';
import close from '../assets/close.png'



const SearchMovies = () => {
    const { searchterm, setSearchTerm, setSearchToggle} = useGlobalContext();

        
    
    const { moviesdata } = useFetchData('search', 'multi', searchterm);


    const router = useRouter()



    const SubmitHandler = (e) => {
        e.preventDefault();

      router.push(`/search?keyword=${searchterm}`)

    
      setSearchTerm('')
      setSearchToggle(false)

    

    }





  return (

        <section className='w-full h-screen z-50' >

            <article className=' absolute top-0 left-0 right-0 mt-16 w-full'>

                 <form onSubmit={(e) => SubmitHandler(e)}>
        
                    <div className='flex flex-col items-center justify-center relative w-w90 md:w-w80 m-auto shadow-box'>
                        <input type="search"  placeholder='Search......' className=' w-full h-12 rounded-xl pl-4 text-xs outline-0 bg-primaryColor shadow-box tracking-widest flex' value={searchterm} onChange={(e)=> setSearchTerm(e.target.value.toLowerCase())}/>

                        <div className=' absolute top-0 right-0 flex items-center justify-center mt-2 mr-3'>

                            <button type="submit" className= {` ${searchterm?  '  bg-bgColor' : ' hidden'}  p-1 bg-bgColor rounded-lg w-24 flex items-center justify-between`} disabled={!searchterm}>
                                <span className=' pl-2'>Search</span>
                                <Image src={search} alt='search icon' className=' w-6 invert' />

                            </button>
                        </div>

                    

                    </div>

                 </form>
                  <div className=' fixed top-0 right-0 mt-16 mr-16 bg-bgColor rounded-lg ' onClick={()=> setSearchToggle(false)}>
                    <Image src={close} alt=' close icon' className=' w-10 invert cursor-pointer' />
                </div>
                {
                    searchterm &&
                <div >
                <SearchField  moviesdata={moviesdata} setSearchTerm={setSearchTerm} searchterm={searchterm} />
                </div>
                }
                
            </article>
        </section>

  )
}

export default SearchMovies