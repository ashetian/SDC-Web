import React from 'react'

export default function Footer() {
  return (
    <div
    className='text-center text-foreground opacity-55 text-s md:text-m mx-5 md:mx-20 rounded-md ease-in-out duration-300'
    >
        <div
        className='flex flex-row justify-center items-start'
        >
            <div
            className='flex my-10 mx-10 md:mx-28 flex-col justify-center items-center'
            >
                <a href="twitter">Twitter</a>
                <a href="instagram">Instagram</a>
                <a href="facebook">Facebook</a>
                <a href="linkedin">LinkedIn</a>
                <a href="medium">Medium</a>
                <a href="mail">Mail</a>
            </div>

            <div
            className='flex my-10 mx-10 md:mx-28 flex-col justify-center items-center'
            >
                <a href="twitter">Twitter</a>
                <a href="instagram">Instagram</a>
                <a href="facebook">Facebook</a>
                <a href="linkedin">LinkedIn</a>
            </div>

            <div
            className='flex my-10 mx-10 md:mx-28 flex-col justify-center items-center'
            >
                <a href="twitter">Twitter</a>
                <a href="instagram">Instagram</a>
                <a href="facebook">Facebook</a>
                <a href="linkedin">LinkedIn</a>
                <a href="github">Github</a>
                <a href="youtube">Youtube</a>
                <a href="medium">Medium</a>
                <a href="telegram">Telegram</a>
                <a href="mail">Mail</a>
            </div>

        </div>
    
        <p
        className='p-4'>Copyright © 2024 KTUSDC. All rights reserved.</p>
    
    </div>
  )
}
