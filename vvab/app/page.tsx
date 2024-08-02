'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]"
    >
      {/*       <section id="hero" className="snap-start">
      </section> */}
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

    </div>
  )
}
