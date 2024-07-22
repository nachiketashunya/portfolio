import React from 'react'
import Timeline from '@/components/Timeline'
import { degree } from '@/constants';

const education = () => {
  return (
    <section className='flex flex-col gap-10 justify-start text-white'>
    <h1 className='text-3xl font-bold px-4 py-1'>
        Education
    </h1>
    <div className='overflow-y-auto'>
      <div className="flex flex-col md:grid grid-cols-12 sm:px-4 text-gray-50">
          {degree.map((info: any, idx: any) => (
            <Timeline key={idx} event={info} idx={idx} />
          ))
          }
      </div>
    </div>
    </section>
  );
}

export default education