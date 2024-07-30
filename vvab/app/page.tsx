'use client'

import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]"
    >
      <section id="header" className="snap-start">
        <Header />
      </section>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  )
}
