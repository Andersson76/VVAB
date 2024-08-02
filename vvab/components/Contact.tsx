import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <div className="space-y-6">
        <h3 className="flex pl-6 justify-center uppercase tracking-[10px] text-gray-500 text-2xl mb-20">
          Kontakt
        </h3>
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
    </motion.div>
  )
}
