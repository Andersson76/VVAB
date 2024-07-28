import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.jpg'

export default function Header() {
  return (
    <header className="flex items-center pt-4 justify-center bg-[rgb(36,36,36)]">
      <Image
        src={logo}
        alt="Väst Ventilation AB Logo"
        width={500}
        height={500}
      ></Image>
    </header>
  )
}
