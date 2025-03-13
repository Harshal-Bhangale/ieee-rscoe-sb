"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MembershipSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-center"
        >
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-3xl font-bold text-[#001529] mb-4">
              Discover what IEEE has to offer.
              Become a member.
            </h2>
            <h3 className="text-lg text-gray-600 mb-4 max-w-4xl mx-auto flex-col md:flex-row text-1xl font-bold text-[#034188] items-center justify-between text-center">
              Be a part of a community that prepares you for college and beyond.
            </h3>
          </div>
          <Link href="/join">
            <Button className="bg-[#001529] hover:bg-blue-900 text-white px-8 py-6 text-lg rounded-md">JOIN NOW</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

