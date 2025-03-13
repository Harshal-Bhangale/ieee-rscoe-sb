"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const societies = [
  {
    id: 1,
    name: "Computer Society",
    logo: "/placeholder.svg?height=200&width=200",
    description:
      "Dedicated to advancing the theory, practice, and application of computer and information processing science and technology.",
    link: "/societies/computer",
  },
  {
    id: 2,
    name: "Power & Energy Society",
    logo: "/placeholder.svg?height=200&width=200",
    description: "Focused on the scientific, engineering, and technological knowledge about electric power and energy.",
    link: "/societies/power-energy",
  },
  {
    id: 3,
    name: "Women in Engineering",
    logo: "/placeholder.svg?height=200&width=200",
    description:
      "Promoting women engineers and scientists, and inspiring girls to follow their academic interests in engineering and science.",
    link: "/societies/wie",
  },
  {
    id: 4,
    name: "Robotics & Automation Society",
    logo: "/placeholder.svg?height=200&width=200",
    description: "Advancing the theory and practice of robotics and automation engineering and science worldwide.",
    link: "/societies/robotics",
  },
]

export default function SocietiesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white" id="societies">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001529] mb-4">IEEE Societies</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
              IEEE Societies are specialized communities within IEEE, each focused on a specific technical area. Join a
              society to connect with professionals in your field of interest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {societies.map((society) => (
              <div
                key={society.id}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={society.logo || "/placeholder.svg"}
                    alt={society.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#001529] mb-2">{society.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{society.description}</p>
                <Link href={society.link}>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/societies">
              <Button className="bg-blue-500 hover:bg-blue-600">Explore All Societies</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

