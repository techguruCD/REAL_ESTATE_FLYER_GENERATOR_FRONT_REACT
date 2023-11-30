import React from 'react'
import { Icon } from '@iconify/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <div className='max-w-xl px-4 md:px-0 mt-9 w-full flex flex-col items-center'>
      <span className='w-fit text-gray-400 text-xs text-center'>
        Real Estate Flyer Made in Seconds
      </span>
      <span className='w-fit text-white mt-4 text-center text-lg'>
        Subscribe for newsletter
      </span>
      <div className='flex relative w-full mt-3'>
        <input className='grow text-gray-400 p-2 px-4 pr-20 bg-transparent border-[#313248] border rounded-md' type="text" placeholder='Enter Your Email' />
        <div className='h-full absolute flex items-center px-6 right-0 bg-[#466BFB] rounded-r-md'>
          <PaperAirplaneIcon className="h-4 w-4 text-white" />
        </div>
      </div>
      <div className='mt-3 flex justify-center text-gray-400 gap-4 text-xl'>
        <Icon icon="ri:github-line" />
        <Icon icon="solar:basketball-outline" />
        <Icon icon="ant-design:facebook-outlined" />
        <Icon icon="iconoir:twitter" />
        <Icon icon="teenyicons:instagram-outline" />
      </div>
      <div className='mt-16 text-gray-400 pb-4 text-center'>
        Copyright © 2023. All Rights Reserved.
      </div>
    </div>
  )
}