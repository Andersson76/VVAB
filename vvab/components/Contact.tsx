import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <div className="space-y-6">
        <div className="flex items-center space-x-1 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">070 966 00 03</p>
        </div>

        <div className="flex items-center space-x-1 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">peter@vastventilation.se</p>
        </div>

        <div className="flex items-center space-x-1 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">Göteborg</p>
        </div>
      </div>
    </div>
  )
}
