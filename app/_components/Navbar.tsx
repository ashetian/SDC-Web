'use client'
import React from 'react'

export default function Navbar() {

    type Link = { name: string, href: string };

    const links:Link[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

  return (
    <div>
        <nav className="flex items-center justify-center flex-row bg-background p-6">
            {
            links.map(({name, href}, index) =>(
                <a 
                key={index} 
                href={href}
                className='text-white hover:text-purple-500 font-bold py-2 px-4 mx-5 md:mx-20  rounded-md ease-in-out duration-300'
                >{name}</a>
            ))
            }
        </nav>
    </div>
  )
}
