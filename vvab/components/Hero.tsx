import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Välkommen till Väst ventilation AB',
      'Vi är proffs på ventilation',
      'Kontakta Peter idag!',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div
      className="h-screen flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <div className="mt-60 mb-32 flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-semibold px-10 text-gray-200 min-h-[60px]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-40 flex space-x-8">
          <Link href="#contact">
            <button className="heroButton mb-4">Kontakta oss</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Om oss</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
