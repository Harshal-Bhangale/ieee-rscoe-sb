"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "The people in IEEE do a great job, they plan activities, hackathons, codeathons and help everyone in the group without any condition. I love being a member of IEEE, the professionals are always here for help as and when required, organising workshops, lessons etc. I have learned a lot from them. Loved to be a part of such an active club. I'm glad to be a part of the IEEE family. I really learned a lot from the mentors who are always available to guide us.",
    name: "Harshal Bhangale",
    role: "Student",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    text: "Being part of IEEE has been an incredible journey. The exposure to cutting-edge technology and networking opportunities has significantly enhanced my professional growth.",
    name: "Harshda Raut",
    role: "Student Member",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    text: "IEEE RSCOE provides an excellent platform for students to develop both technical and leadership skills. The workshops and events are well-organized and informative.",
    name: "Nick Son",
    role: "Student Volunteer",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-black">
            Straight from the heart. <br /><span className="text-red-500">❤️</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto flex-col md:flex-row text-1xl font-bold text-[#034188] text-center" >IEEE members and event participants share their perspectives.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="text-4xl text-gray-300 mb-6">"</div>
              <p className="text-gray-700 text-lg mb-8">{testimonials[currentSlide].text}</p>
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <Image
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={testimonials[currentSlide].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#001529]">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500 w-4" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

