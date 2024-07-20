import React from 'react'
import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Socials = ({ containerStyles, iconStyles }) => {
    const socials = [
        {icon: <FaGithub />, path: ""},
        {icon: <FaLinkedinIn />, path: ""},
        {icon: <FaEnvelope />, path: ""}
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

    </div>
  )
}

export default Socials