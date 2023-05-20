import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '@/context/useContext';

const Log_Sign = ({setSigninToggle}) => {
    const {register, setRegister} = useGlobalContext();
  return (
    <>
    <section className='fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen bg-neutral-400/20 z-50'>
        <article className='w-w90 m-auto flex items-center justify-center min-h-screen'>
            {/* Login Section */}
            {
                register?
                <div className=' relative w-w27 bg-primaryColor p-7 rounded-xl'>
                        <div className=' absolute top-0  right-0 text-base pt-2 pr-2 cursor-pointer text-gray-400 hover:text-textColor' onClick={()=> setSigninToggle((prev)=> !prev)}>
                            <Icon icon="ic:sharp-close" />
                        </div>
                        <div className=' font-normal tracking-wider text-base '>
                            <h1>
                                Sign-in
                            </h1>
                        </div>
                        <div className=' mt-10'>
                            <form action="" className='flex flex-col gap-3'>
                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="email" className=' text-xs text-gray-400'>Your Email</label>
                                    <input type="email" name="" id="" placeholder='Your username or email' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="password" className=' text-xs text-gray-400'>Password</label>
                                    <input type="password" name="" id="" placeholder='Password' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>
                                <div className=' text-xxs flex items-end justify-end font-normal text-red-500'>
                                    <a href="">
                                        <p>
                                            Forgot your password?
                                        </p>
                                    </a>
                                </div>
                                <div className=' flex gap-2 text-xs tracking-wider font-normal cursor-pointer'> 
                                    <input type="checkbox" name="" id="" className='rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0 cursor-pointer'/> Remember me
                                </div>

                                <div className=' flex items-center justify-center w-full h-11 bg-red-400 rounded-md hover:bg-red-500 cursor-pointer mt-4'>
                                    <button type="submit">Login</button>
                                </div>
                                <div className=' flex items-center justify-center text-xxs font-medium pt-2 '> 
                                <p className=' font-thin text-gray-300'>
                                    Don't have an account? <span className=' cursor-pointer text-red-500 font-medium tracking-wider text-xs' onClick={() => setRegister((prev)=> !prev)}> Register</span>

                                </p>
                                </div>

                            </form>

                        </div>
                </div>
            :

                <div className=' relative w-w27 bg-primaryColor p-7 rounded-xl'>
                        <div className=' absolute top-0  right-0 text-base pt-2 pr-2 cursor-pointer text-gray-400 hover:text-textColor' onClick={()=> setSigninToggle((prev)=> !prev)}>
                            <Icon icon="ic:sharp-close" />
                        </div>
                        <div className=' font-normal tracking-wider text-base '>
                            <h1>
                                Create Account
                            </h1>
                            <p className=' text-xxs'>
                                Create an account to enjoy more features
                            </p>
                        </div>
                        <div className=' mt-10'>
                            <form action="" className='flex flex-col gap-3'>
                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="email" className=' text-xs text-gray-400'>Username</label>
                                    <input type="text" name="" id="" placeholder='Your username' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>

                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="email" className=' text-xs text-gray-400'>Email Address</label>
                                    <input type="email" name="" id="" placeholder='Your email' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>

                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="password" className=' text-xs text-gray-400'>Password</label>
                                    <input type="password" name="" id="" placeholder='Password' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>

                                <div className=' flex flex-col gap-3'>
                                    <label htmlFor="password" className=' text-xs text-gray-400'>Password Comfirmation</label>
                                    <input type="password" name="" id="" placeholder='Repeat your password' required className=' w-full h-11 rounded-md pl-3 bg-neutral-400/20 text-textColor outline-0'/>
                                </div>

                                <div className=' flex items-center justify-center w-full h-11 bg-red-400 rounded-md hover:bg-red-500 cursor-pointer mt-4'>
                                    <button type="submit" >Register</button>
                                </div>
                                <div className=' flex items-center justify-center text-xxs font-medium pt-2 '> 
                                <p className=' font-thin text-gray-300'>
                                    Already have an account? <span className=' cursor-pointer text-red-500 font-medium tracking-wider text-xs' onClick={() => setRegister((prev)=> !prev)}> Sign in</span>

                                </p>
                                </div>

                            </form>

                        </div>
                </div>
            }
        </article>
    </section>
    
    </>
  )
}

export default Log_Sign