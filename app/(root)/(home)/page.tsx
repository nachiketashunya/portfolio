'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import Socials from '@/components/Socials'

const Home = () => {  
  const handleViewResume = () => {
      window.open('/pdf/Resume.pdf', '_blank'); // Adjust the path if necessary
  }

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pb-24'>
          <div className='text-center xl:text-left'>
            <h1 className='text-4xl'>
              Hello, I&apos;m <span className='text-lime-300'>Nachiketa Purohit</span>
            </h1>

            <section className='flex flex-col gap-2 mt-10 w-full mb-9 text-white'>
              <p>        
                I&apos;m currently sharpening my skills in Machine Learning and Deep Learning while pursuing a master degree in <span className='text-lime-200'>Artificial Intelligence</span> at <span className='text-lime-200'>IIT Jodhpur</span>. I&apos;m hands-on, constantly learning and adding new tools to my belt.
              </p>
              <p>
                Think of me as a programmer in training, building and implementing algorithms and models.  Right now, I&apos;m focusing on <span className='text-lime-200'>Document Image Analysis</span> to tackle real-world problems with intelligent code.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m often found cycling and exploring new ideas.  This website showcases my current skillset and projects.  Stay tuned to see what I build next! 
              </p>
            </section>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                onClick={handleViewResume}
                variant="outline"
                size="lg"
                className="uppercase flex items-center border border-lime-300 text-black hover:text-primary hover:transition-all duration-500 bg-lime-200 hover:bg-lime-300 hover:text-black"
              >
                <span>View CV</span>
                
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles={"flex gap-6"} 
                iconStyles={"w-9 h-9 border border-lime-300 rounded-full flex justify-center items-center text-lime-300 text-base hover:bg-lime-300 hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home