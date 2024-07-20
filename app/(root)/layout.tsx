import React, { ReactNode } from 'react'

const RootLayout = ({ children } : { children: ReactNode }) => {
  return (
    <main className='relative'>
        { children }
    </main>
  )
}

export default RootLayout