import React, { Fragment } from 'react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import './ImagesDialog.css'

export default function ImagesDialog({ isOpen, setIsOpen, image_urls = [] }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="cursor-pointer ' + className + '"><span class="">' + (index + 1) + '</span></div>';
    },
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Generated Images
                </Dialog.Title> */}
                <div className="mt-2">
                  <Swiper
                    navigation={true}
                    pagination={pagination}
                    modules={[Navigation, Pagination]}
                    className='mySwiper'
                  >
                    {
                      image_urls.map((image_url, i) => <SwiperSlide key={i} > <a href={image_url} target='_blank'><img src={image_url} /></a> </SwiperSlide>)
                    }
                  </Swiper>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}