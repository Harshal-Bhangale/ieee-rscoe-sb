"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CircuitAnimation from "./circuit-animation"

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen bg-[#001529] overflow-hidden flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hero-text">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your future of better learning starts here.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Make global connections along your path.
              <br />
              Become an IEEE Member.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[150px]">
                  EVENTS
                </Button>
              </Link>
              <Link href="/genesis">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[150px]">
                  GENESIS 3.0
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <CircuitAnimation />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-indicator"
        onClick={handleScrollClick}
      >
        <div className="flex flex-col items-center">
          <span className="text-blue-400 text-xs mb-2 rotate-90">scroll</span>
          <div className="h-16 w-0.5 bg-blue-400"></div>
        </div>
      </div> */}
    </section>
  )
}
  
