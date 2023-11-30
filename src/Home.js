import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { RadioGroup } from '@headlessui/react'
import { MapPinIcon, UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, WindowIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Icon } from '@iconify/react';

function FormInput({ title, Icon, className, placeholder, PaperAirplaneIcon, onChange, value, type = "text" }) {
  return (
    <div className={`${className || ''}`}>
      <span>{title}</span>
      <div className='flex relative mt-2'>
        <div className='h-full absolute flex items-center px-3'>
          <Icon className="h-4 w-4" />
        </div>
        <input
          className='w-full placeholder:text-gray-600 grow p-2 pl-9 bg-transparent border-[#313248] border rounded-md'
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
      </div>
    </div>
  )
}

export default function Home() {
  const [plan, setPlan] = useState('sale')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [website, setWebsite] = useState('')
  const [bedRoom, setBedRoom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [squareFeet, setSquareFeet] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = () => {

  }
  return (
    <div className='max-w-xl px-4 md:px-0 flex flex-col w-full items-center mt-24'>
      <div className='text-center'>
        <h1 className='text-white text-4xl'>
          Real Estate Flyer Made in Seconds
        </h1>
        <h2 className='text-gray-400 text-sm mt-3'>
          For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.
        </h2>
      </div>

      <div className=' mt-8 w-full'>
        <div className='w-full flex'>
          <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
            Listed
          </div>
          <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
            Not Listed
          </div>
        </div>
        <div className=' mt-8 w-full p-10 text-gray-400 bg-[#15152B] border-[#313248] border rounded-xl'>
          <div className='w-full mt-6'>
            <RadioGroup value={plan} onChange={setPlan} className="flex gap-6">
              <RadioGroup.Option value="sale">
                {({ checked, active }) => (
                  <div className='flex items-center gap-2 cursor-pointer'>
                    <span aria-hidden="true"
                      className={classNames(
                        'h-3 w-3 rounded-full bg-white',
                        checked ? 'border-[#1A69F9] border-4' : 'border-gray-300 border-0',
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
                        checked ? 'border-[#1A69F9] border-4' : 'border-gray-300 border-0',
                      )}
                    />
                    <div className='' >Open House</div>
                  </div>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>

          <FormInput className='w-full mt-6' value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} title='Property Address*' Icon={MapPinIcon} placeholder='ex: 23 Main Street, Anytown, USA 12345' />
          <FormInput className='w-full mt-6' value={fullName} onChange={(e) => setFullName(e.target.value)} title='Full Name*' Icon={UserIcon} placeholder='ex: John Smith' />
          <FormInput className='w-full mt-6' value={email} onChange={(e) => setEmail(e.target.value)} title='Email*' Icon={EnvelopeIcon} placeholder='ex: johnsmith@gmail.com' />
          <FormInput className='w-full mt-6' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} title='Phone Number*' Icon={PhoneIcon} placeholder='ex: (+1)123-456-123' />
          <FormInput className='w-full mt-6' value={companyName} onChange={(e) => setCompanyName(e.target.value)} title='Company Name*' Icon={BuildingOfficeIcon} placeholder='Your Company Name' />
          <FormInput className='w-full mt-6' value={website} onChange={(e) => setWebsite(e.target.value)} title='Website*' Icon={WindowIcon} placeholder='ex: www.company.com' />

          <div className='w-full sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-3'>
            <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={bedRoom} onChange={(e) => setBedRoom(e.target.value)} title='Bed Room*' Icon={() => <Icon icon='uil:bed' />} placeholder='ex: 1' />
            <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={bathroom} onChange={(e) => setBathroom(e.target.value)} title='Bathroom*' Icon={() => <Icon icon='solar:bath-outline' />} placeholder='Your 0' />
            <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} title='Square Feet*' Icon={HomeIcon} placeholder='ex: 100' />
          </div>

          <div className='w-full mt-6'>
            <span>Description</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full bg-transparent border mt-2 p-3 rounded-md placeholder:text-gray-600 border-[#313248]' placeholder='Enter your description here'></textarea>
          </div>

          <div onClick={onSubmit} className='w-full mt-9 cursor-pointer text-md font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
            Generate Flyer
          </div>
        </div>
      </div>
    </div>
  )
}