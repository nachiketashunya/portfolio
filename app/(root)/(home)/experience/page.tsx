import React from 'react'
import Timeline from '@/components/Timeline';
import { expCompanies } from '@/constants';

const Experience = () => {
    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <h1 className='text-3xl font-bold '>
            Experience
            </h1>
            <div className='overflow-y-auto'>
                <div className="flex flex-col md:grid grid-cols-12 sm:px-4 text-gray-50">
                    {expCompanies.map((info:any, idx: number) => (
                        <Timeline key={idx} event={info} idx={idx} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience