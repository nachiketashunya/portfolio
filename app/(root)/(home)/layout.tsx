import React, { ReactNode } from 'react'
import SideNav from '@/components/side-nav'
import Navbar from '@/components/navbar'

const HomeLayout = ({ children } : { children: ReactNode }) => {
  return (
    <main className='relative'>
        <Navbar /> 
        <div className='flex'>
            <SideNav /> 
            <section className='flex min-h-screen flex-1 flex-col px-2 pb-6 pt-24 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    { children }
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout