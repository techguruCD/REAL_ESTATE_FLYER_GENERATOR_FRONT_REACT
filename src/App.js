import { RadioGroup } from '@headlessui/react'
import { useState } from 'react';
import classNames from 'classnames';
import { MapPinIcon, UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, WindowIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Icon } from '@iconify/react';
// import logo from './logo.svg';
import './App.css';

const plans = [
  { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
  { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
  { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
]

function FormInput({ title, Icon, className, placeholder, PaperAirplaneIcon }) {
  return (
    <div className={`w-full mt-6 ${className || ''}`}>
      <span>{title}</span>
      <div className='flex relative mt-2'>
        <div className='h-full absolute flex items-center px-3'>
          <Icon className="h-4 w-4" />
        </div>
        <input className='placeholder:text-gray-600 grow p-2 pl-9 bg-transparent border-[#313248] border rounded-md' type="text" placeholder={placeholder} />
      </div>
    </div>
  )
}

function App() {
  let [plan, setPlan] = useState('sale')
  return (
    <div className='min-h-screen min-w-screen bg-[#111022]'>
      <div className='px-10 py-2 w-full flex justify-between items-center'>
        <div className='text-white text-2xl'>FLYER</div>
        <div className='text-gray-400 text-sm'>Hello Sunny Vo!</div>
      </div>
      <div className='flex flex-col w-full items-center mt-24'>
        <div className='max-w-xl  text-center'>
          <h1 className='text-white text-4xl'>
            Real Estate Flyer Made in Seconds
          </h1>
          <h2 className='text-gray-400 text-sm mt-3'>
            For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.
          </h2>
        </div>

        <div className='max-w-xl mt-8 w-full'>
          <div className='w-full flex'>
            <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Listed
            </div>
            <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Not Listed
            </div>
          </div>
          <div className='max-w-xl mt-8 w-full p-10 text-gray-400 bg-[#15152B] border-[#313248] border rounded-xl'>
            <div className='w-full mt-6'>
              <RadioGroup value={plan} onChange={setPlan} className="flex gap-6">
                <RadioGroup.Option value="sale">
                  {({ checked, active }) => (
                    <div className='flex items-center gap-2 cursor-pointer'>
                      <span aria-hidden="true"
                        className={classNames(
                          'h-3 w-3 rounded-full bg-white',
                          checked ? 'bg-indigo-600 border-transparent border-[#1A69F9] border-4' : 'border-gray-300 border-0',
                        )}
                      />
                      <div className='' >For Sale</div>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="house">
                  {({ checked, active }) => (
                    <div className='flex items-center gap-2 cursor-pointer'>
                      <span aria-hidden="true"
                        className={classNames(
                          'h-3 w-3 rounded-full bg-white',
                          checked ? 'bg-indigo-600 border-transparent border-[#1A69F9] border-4' : 'border-gray-300 border-0',
                        )}
                      />
                      <div className='' >Open House</div>
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>

            <FormInput className='w-full mt-6' title='Property Address*' Icon={MapPinIcon} placeholder='ex: 23 Main Street, Anytown, USA 12345' />
            <FormInput className='w-full mt-6' title='Full Name*' Icon={UserIcon} placeholder='ex: John Smith' />
            <FormInput className='w-full mt-6' title='Email*' Icon={EnvelopeIcon} placeholder='ex: johnsmith@gmail.com' />
            <FormInput className='w-full mt-6' title='Phone Number*' Icon={PhoneIcon} placeholder='ex: (+1)123-456-123'/>
            <FormInput className='w-full mt-6' title='Company Name*' Icon={BuildingOfficeIcon} placeholder='Your Company Name'/>
            <FormInput className='w-full mt-6' title='Website*' Icon={WindowIcon} placeholder='ex: www.company.com'/>

            <div className='w-full mt-9 text-md font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Generate Flyer
            </div>
          </div>
        </div>

        <div className='max-w-xl mt-9 w-full flex flex-col items-center'>
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
            <Icon icon="ri:github-line"/>
            <Icon icon="solar:basketball-outline" />
            <Icon icon="ant-design:facebook-outlined" />
            <Icon icon="iconoir:twitter" />
            <Icon icon="teenyicons:instagram-outline" />
          </div>
          <div className='mt-16 text-gray-400 pb-4 text-center'>
            Copyright © 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
