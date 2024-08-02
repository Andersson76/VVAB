import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.jpg'

export default function Header() {
  return (
    <header className="sticky top-10 z-20 flex items-center justify-center bg-[rgb(36,36,36)]">
      <Image
        src={logo}
        alt="Väst Ventilation AB Logo"
        width={500}
        height={500}
      ></Image>
    </header>
  )
}
