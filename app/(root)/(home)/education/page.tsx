import React from 'react'
import Timeline from '@/components/Timeline'

const education = () => {
  const events = [
    {
      title: "Master of Technology in Artificial Intelligence",
      description: "IIT Jodhpur",
      date: "2023 - Present",
      cgpa: "7.83"
    },
    {
      title: "Master of Computer Applications",
      description: "RGPV Bhopal",
      date: "2020 - 2022",
      cgpa: "9.85"
    },
    {
      title: "B.Sc Electronic Media",
      description: "MCU Bhopal",
      date: "2017 - 2020",
      cgpa: "7.83"
    }
    // Add more events here
  ];
  return (
    <section className='flex flex-col gap-10 justify-start text-white'>
    <h1 className='text-3xl font-bold '>
        Education
    </h1>
    <Timeline events={events} />
    </section>
  );
}

export default education