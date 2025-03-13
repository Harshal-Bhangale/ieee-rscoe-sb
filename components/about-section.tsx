"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { number: "500+", label: "Members" },
  { number: "50+", label: "Events" },
  { number: "4", label: "Societies" },
  { number: "10+", label: "Mentors" },
]

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div ref={ref} className="space-y-16">
          {/* IEEE Global Info */}
          <div
            className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001529] mb-6">
              Institute of Electrical and Electronics Engineers
            </h2>
            <p className="text-xl text-center text-gray-600 mb-8">Advancing technology for the benefit of humanity.</p>
            <p className="text-gray-600 max-w-4xl mx-auto text-center mb-8">
              IEEE is the world's largest technical professional organization dedicated to advancing technology for the
              benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow
              through its more than 400,000 members in over 160 countries, and its highly cited publications,
              conferences, technology standards, and professional and educational activities. IEEE is the trusted
              "voice" for engineering, computing, and technology information around the globe.
            </p>
            <div className="text-center">
              <Link href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Learn more at ieee.org
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* IEEE RSCOE Info */}
          <div className="grid md:grid-cols-2 gap-16">
            <div
              className={`transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-2xl font-bold text-[#001529] mb-4">About IEEE SB RSCOE</h3>
              <p className="text-gray-600 mb-6">
                IEEE Student Branch, RSCOE is a group of driven individuals striving to create and spread awareness
                about various technologies that surround us. In our pursuit for quality and practical knowledge, we are
                guided by a group of dedicated faculty members who are relentless in their efforts to hone our potential
                and mould us into the best engineers we could possibly become.
              </p>
            </div>
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#001529] mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  IEEE SB RSCOE envisions itself as the world's premier provider of technical knowledge, community
                  services, educational seminars, and individualised services to the world's top professionals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#001529] mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  IEEE SB RSCOE is the biggest technical professional organisation of RSCOE. Our mission here is to work
                  on projects and development into advancing technology in order to transform lives through the power of
                  technology and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

