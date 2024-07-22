'use client'

import React from 'react'
import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Socials = ({ containerStyles, iconStyles }: {containerStyles: any, iconStyles: any}) => {
    const email = "nachiketapuro@gmail.com"
  
    const handleCopy = () => {
      navigator.clipboard.writeText(email).then(() => {
        alert("Email ID copied")
      });

    };

    const socials = [
        {icon: <FaGithub />, path: "https://github.com/nachiketashunya"},
        {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nachiketa-purohit-2409551b1/"},
    ]
  return (
    <div className={containerStyles}>
        {socials.map((icon, index) => {
            return (
            <Link key={index} href={icon.path} className={iconStyles}>
                {icon.icon}
            </Link>
        )
        })}
        <p className={`${iconStyles} cursor-pointer`} title='Copy Email-ID' onClick={handleCopy}>
            <FaEnvelope />
        </p>
    </div>
  )
}

export default Socials