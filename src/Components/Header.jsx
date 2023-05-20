'use client'
import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import Image from 'next/image';
import profile from '../assets/profile.jpg'
import MobileNavLink from './MobileNavLink';
import SearchMovies from './SearchMovies';
import close from '../assets/close.png'
import LangeNavLinks from './LargeNavLinks';
import { Icon } from '@iconify/react';
import Log_Sign from './Register';
import Link from 'next/link';
import { useGlobalContext } from '@/context/useContext';



const Header = () => {


        const {setSearchTerm, searchtoggle, setSearchToggle, menutoggle, setMenuToggle,signintoggle, setSigninToggle} = useGlobalContext();


     useEffect(()=>{
       
       menutoggle? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

     },[menutoggle])

 


  return (
    <>
    <header className=' w-full h-h10 shadow-box2 '>
        <nav className=' w-w95 m-auto'>
            <div className=' flex items-center justify-between h-h10'>

                <div >
                  <Link href='/'>
                    <Image src={logo} alt='Logo Icon' className=' w-36 object-contain '/>
                  </Link>
                    
                </div>

                <div className=' flex items-center justify-center'>
                  <LangeNavLinks setSearchToggle={setSearchToggle}/>
                </div>

                  {
                    searchtoggle &&
                    <div className=' fixed top-0 left-0 right-0 z-50 bg-neutral-400/50 '>
                          <SearchMovies setSearchToggle={setSearchToggle}/>
                    </div>
                  }

                <div className=' flex items-center justify-center gap-5'>
                  <div>
                    <Image src={search} alt='' className=' w-8 invert cursor-pointer' onClick={()=>{
                      setSearchToggle((prev)=> !prev)
                      setMenuToggle(false);
                    }} />
                    
                  </div>

                  <div className=' flex items-center justify-center gap-4 cursor-pointer' onClick={() =>{
                          setSigninToggle((prev) => !prev)
                          setSearchToggle(false)
                        }} >
                    
                    <div className='  flex items-center justify-center w-7 h-7 rounded-full border-2 text-sm' >
                        <Icon icon="ic:baseline-person" />
                    </div>
                      <div className=' hidden sm:block'>
                        Login / Register
                      </div>

                  </div>

                  <div className=' text-lg md:hidden flex items-center justify-center transition-all duration-300 ease-linear cursor-pointer' onClick={()=>{
                    setMenuToggle((prev)=> !prev)
                    setSearchToggle(false)
                  } }>
                    {
                      menutoggle?
                      <Image src={close} alt='' className=' w-7 invert cursor-pointer' />
                      :
                      <Image src={menu} alt='' className=' w-8 invert cursor-pointer' />
                    }
                    

                  </div>

                </div>
                {/* Mobile Nav Links Section */}
                  {
                     menutoggle &&
                <div className=' fixed right-0 mt-80 mr-3 z-50'> 

                      <MobileNavLink/>    

                </div>
                  }
                {/* Mobile Nav Links Section */}

            </div>
           
        </nav>
        
    </header>

    {/* SingIn and SingUp  Section */}
    <div>
      {
        signintoggle &&
          <Log_Sign setSigninToggle={setSigninToggle}/>
      }
    </div>


    </>
  )
}

export default Header