import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames';
import axios from 'axios'
import { useDropzone } from 'react-dropzone';
import { BeatLoader } from 'react-spinners';
import { RadioGroup } from '@headlessui/react'
import { MapPinIcon, UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, WindowIcon, HomeIcon, ChevronLeftIcon, ChevronRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Icon } from '@iconify/react';

import ImagesDialog from './ImagesDialog';

function Preview({ file, className, onMoveRight, onMoveLeft, onDelete }) {
  return (
    <div className={classNames('relative justify-center items-center flex rounded-md', className)}>
      <img src={file.preview} className='rounded-md' />
      <div className='absolute left-0 top-0 w-full h-full opacity-0 hover:opacity-100'>
        <div className='absolute h-full w-6 left-0 flex items-center'>
          <ChevronLeftIcon className='cursor-pointer' onClick={onMoveLeft} />
        </div>
        <div className='absolute h-full w-6 right-0 flex items-center'>
          <ChevronRightIcon className='cursor-pointer' onClick={onMoveRight} />
        </div>
        <div className='absolute w-6 h-6 right-0 top-0 text-stone-300 cursor-pointer'>
          <XCircleIcon onClick={onDelete} />
        </div>
      </div>
    </div>
  ) 
}

function FilesContainer({ className, files, setFiles }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))])
    }
  })

  function onDelete(index) {
    let deletingFile = files[index]
    setFiles([...files.slice(0, index), ...files.slice(index + 1)])
    URL.revokeObjectURL(deletingFile.preview)
  }

  function onMove(index, direction) {
    let targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= files.length) return;
    if (direction < 0) {
      setFiles([...files.slice(0, targetIndex), files[index], files[targetIndex], ...files.slice(index + 1)])
    } else {
      setFiles([...files.slice(0, index), files[targetIndex], files[index], ...files.slice(targetIndex + 1)])
    }
  }

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <div className={classNames('flex gap-4', className)}>
      {
        files.map((file, i) => <Preview file={file} key={i} className='border w-1/4' onDelete={() => onDelete(i)} onMoveLeft={() => onMove(i, -1)} onMoveRight={() => onMove(i, 1)} />)
      }
      <div {...getRootProps({ className: classNames('w-1/4 flex justify-center items-center dropzone rounded-md h-auto min-h-[120px] border cursor-pointer', files.length < 4 ? 'block' : 'hidden') })}>
        <input {...getInputProps()} />
        <PlusCircleIcon className='w-20 h-20' />
      </div>
    </div>
  )
}

function FormInput({ title, Icon, className, placeholder, PaperAirplaneIcon, onChange, value, type = "text", error }) {
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
      {error && <span className='text-red-500'>{error}</span>}
    </div>
  )
}

export default function Home() {
  const [isListed, setIsListed] = useState(true)
  const [isImagesDialogOpen, setIsImagesDialogOpen] = useState(true)
  const [image_urls, setImageUrls] = useState(["https://images.bannerbear.com/direct/EPylBaMArmA1Dnqv3X/requests/000/046/044/119/DdWb1LGkNYNaaZwgQ70OKvRAP/f1b13e7ac58a1a5661c469badb204a4520adb843.png", "https://images.bannerbear.com/direct/EPylBaMArmA1Dnqv3X/requests/000/046/044/123/7gAk4KJj8QmwwpRjzvwqxrD20/d0b806c2e38bd5b62391b297a78ef4362d0b3bb5.png", "https://images.bannerbear.com/direct/EPylBaMArmA1Dnqv3X/requests/000/046/044/120/3Be2PXkVAQ4KKvWK6m78j1oNa/5adacba3523582f37beb5cf7349c09a74146f0fc.png", "https://images.bannerbear.com/direct/EPylBaMArmA1Dnqv3X/requests/000/046/044/122/KZA1qL8r0zlooPMgYepakDXbM/e49574140865d30a33a104439de0b641b8727908.png", "https://images.bannerbear.com/direct/EPylBaMArmA1Dnqv3X/requests/000/046/044/121/nBjKDywPW6Z0071aY4vgVoMrN/cc5dd7f92fe3b94561ae3625269343023c7df424.png"])
  // const [image_urls, setImageUrls] = useState([])
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState('For Sale')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [website, setWebsite] = useState('')
  const [bedroom, setBedRoom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [squareFeet, setSquareFeet] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])
  const [errors, setErrors] = useState({})

  const onSubmit = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('plan', plan)
    formData.append('propertyAddress', propertyAddress)
    formData.append('fullName', fullName)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('companyName', companyName)
    formData.append('website', website)
    if (!isListed) {
      formData.append('bedroom', bedroom)
      formData.append('bathroom', bathroom)
      formData.append('squareFeet', squareFeet)
      formData.append('description', description)
      images.forEach(image => formData.append('images', image))
    }
    axios.post(process.env.REACT_APP_API_URL + (isListed ? '/listed' : '/notListed'), formData)
      .then(({ data }) => {
        setImageUrls(data)
        setIsImagesDialogOpen(true)
        setErrors({})
      }).catch(err => {
        const errorsResponse = err?.response?.data?.error?.details || []
        const errors = {}
        errorsResponse.forEach(error => {
          errors[error.context.key] = error.message
        })
        setErrors(errors)
      }).finally(() => {
        setLoading(false)
      })
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
        <RadioGroup value={isListed} onChange={setIsListed} className="flex w-full">
          <RadioGroup.Option value={true} className="grow cursor-pointer">
            {({ checked, active }) => (
              <div className={classNames(
                'text-sm font-semibold text-center text-white rounded-md px-3.5 py-2.5 from-[#586FFB] to-[#8D79FB] hover:bg-gradient-to-r focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
                checked ? 'bg-gradient-to-r' : ''
              )}>
                Listed
              </div>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={false} className="grow cursor-pointer">
            {({ checked, active }) => (
              <div className={classNames(
                'text-sm font-semibold text-center text-white rounded-md px-3.5 py-2.5 from-[#586FFB] to-[#8D79FB] hover:bg-gradient-to-r focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
                checked ? 'bg-gradient-to-r' : ''
              )}>
                Not Listed
              </div>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <div className=' mt-8 w-full p-10 text-gray-400 bg-[#15152B] border-[#313248] border rounded-xl'>
          <div className='w-full mt-6'>
            <RadioGroup value={plan} onChange={setPlan} className="flex gap-6">
              <RadioGroup.Option value="For Sale">
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
              <RadioGroup.Option value="Open House">
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

          <FormInput className='w-full mt-6' value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} error={errors.propertyAddress} title='Property Address*' Icon={MapPinIcon} placeholder='ex: 23 Main Street, Anytown, USA 12345' />
          <FormInput className='w-full mt-6' value={fullName} onChange={(e) => setFullName(e.target.value)} error={errors.fullName} title='Full Name*' Icon={UserIcon} placeholder='ex: John Smith' />
          <FormInput className='w-full mt-6' value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} title='Email*' Icon={EnvelopeIcon} placeholder='ex: johnsmith@gmail.com' />
          <FormInput className='w-full mt-6' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} error={errors.phoneNumber} title='Phone Number*' Icon={PhoneIcon} placeholder='ex: (+1)123-456-123' />
          <FormInput className='w-full mt-6' value={companyName} onChange={(e) => setCompanyName(e.target.value)} error={errors.companyName} title='Company Name*' Icon={BuildingOfficeIcon} placeholder='Your Company Name' />
          <FormInput className='w-full mt-6' value={website} onChange={(e) => setWebsite(e.target.value)} error={errors.website} title='Website*' Icon={WindowIcon} placeholder='ex: www.company.com' />
          {
            !isListed && (
              <Fragment>
                <div className='w-full sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-3'>
                  <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={bedroom} onChange={(e) => setBedRoom(e.target.value)} error={errors.bedroom} title='Bed Room*' Icon={() => <Icon icon='uil:bed' />} placeholder='ex: 1' />
                  <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={bathroom} onChange={(e) => setBathroom(e.target.value)} error={errors.bathroom} title='Bathroom*' Icon={() => <Icon icon='solar:bath-outline' />} placeholder='Your 0' />
                  <FormInput className='w-full mt-6 sm:mt-0 sm:col' value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} error={errors.squareFeet} title='Square Feet*' Icon={HomeIcon} placeholder='ex: 100' />
                </div>

                <div className='w-full mt-6'>
                  <span>Description</span>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full bg-transparent border mt-2 p-3 rounded-md placeholder:text-gray-600 border-[#313248]' placeholder='Enter your description here'></textarea>
                </div>
                <div className='mt-6'>
                  <span>Upload photos (4 Max)</span>
                  <FilesContainer files={images} setFiles={setImages} className='mt-2' />
                </div>
              </Fragment>
            )
          }

          <div onClick={onSubmit} className='w-full mt-9 cursor-pointer text-md font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
            Generate Flyer
          </div>
        </div>
      </div>
      <ImagesDialog isOpen={isImagesDialogOpen} setIsOpen={setIsImagesDialogOpen} image_urls={image_urls} />
      {
        loading &&
        <div className='fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-[#dddddd22]'>
          <BeatLoader color="#36d7b7" />
        </div>
      }
    </div>
  )
}