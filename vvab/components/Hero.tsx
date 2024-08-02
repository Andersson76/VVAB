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
      className="h-screen flex flex-col space-y-6 items-center justify-center
    text-center overflow-hidden"
    >
      <h1 className="text-3xl lg:text-4xl font-semibold px-10 text-white-500">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="pt-5">
        <Link href="#contact">
          <button className="heroButton ">Kontakta oss</button>
        </Link>
        <Link href="#about">
          <button className="heroButton lg:ml-32 ml-8 mt-40">Om oss</button>
        </Link>
      </div>
    </div>
  )
}
