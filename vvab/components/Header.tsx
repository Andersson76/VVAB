import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.jpg'

export default function Header() {
  return (
    <header className="p-4 flex items-center">
      <Image
        src={logo}
        alt="Väst Ventilation AB Logo"
      ></Image>
      <h1 className="text-white text-2xl"></h1>
    </header>
  )
}
