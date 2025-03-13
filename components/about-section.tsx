"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Counter from "@/components/Counter";

const stats = [
  { number: 500, label: "Members" },
  { number: 70, label: "Events" },
  { number: 3, label: "Societies" },
  { number: 10, label: "Mentors" },
];

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation starts when 20% of the section is visible
    triggerOnce: true, // Runs animation only once
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div ref={ref} className="space-y-16">
          {/* IEEE Global Info */}
          <div
            className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-center text-[#001529] mb-4">
              Institute of Electrical and Electronics Engineers
            </h2>
            <p className="text-lg font-bold text-center mb-8 text-[#034188]">
              Advancing technology for the benefit of humanity.
            </p>
            <p className=" font-medium text-black max-w-5xl mx-auto text-center mb-8">
              IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className=" font-medium text-black max-w-6xl mx-auto text-center mb-8">
              IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 400,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted "voice" for engineering, computing, and technology information around the globe.</p>
            <div className="text-center">
              <Link href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-bold text-black">
                  Learn more at ieee.org
                </h2>
              </Link>
            </div>
          </div>

          {/* Stats Section with Animated Numbers and Faint Border */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 1 }} // Slow fade-in effect
                className="flex flex-col items-center justify-center border-2 border-dotted border-black/20 p-8 rounded-lg shadow-sm"
              >
                {/* Animated Counter */}
                <motion.h3
                  className="text-4xl font-bold text-black mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                >
                  <Counter target={stat.number} />
                </motion.h3>
                <p className="text-black">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* IEEE RSCOE Info */}
          <div className="grid md:grid-cols-2 gap-16 text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              <h3 className="text-2xl font-bold text-[#001529] mb-4">About IEEE SB RSCOE</h3>
              <p className="text-black mb-6">
                IEEE Student Branch, RSCOE is a group of driven individuals striving to create and spread awareness
                about various technologies that surround us. In our pursuit for quality and practical knowledge, we are
                guided by a group of dedicated faculty members who are relentless in their efforts to hone our potential
                and mould us into the best engineers we could possibly become.
              </p>
            </div>
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#001529] mb-4">Our Vision</h3>
                <p className="text-black mb-6">
                  IEEE SB RSCOE envisions itself as the world's premier provider of technical knowledge, community
                  services, educational seminars, and individualised services to the world's top professionals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#001529] mb-4">Our Mission</h3>
                <p className="text-black mb-6">
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
  );
}
