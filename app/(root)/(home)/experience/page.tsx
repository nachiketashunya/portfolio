import React from 'react'
import Timeline from '@/components/Timeline';

const Experience = () => {
    const events = [
        {
            title: "Full Stack Developer",
            company: "RPA Technologies",
            date: "March 2021 - Sept 2021",
            activity: [
                'Leveraged RESTful APIs to integrate backend services, boosting application functionality', 
                'Refactored the codebase, resulting in a 15% improvement in page load speed',
                'Enhanced backend functionality and optimized performance using NodeJS, Laravel, and MySQL on the AWS cloud'
            ]
        }
    ];
    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <h1 className='text-3xl font-bold '>
            Experience
            </h1>
            <div className='overflow-y-auto'>
                <div className="flex flex-col md:grid grid-cols-12 sm:px-4 text-gray-50">
                    {events.map((info, idx) => (
                        <Timeline key={idx} event={info} idx={idx} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience