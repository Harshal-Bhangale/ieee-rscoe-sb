"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin, GitlabIcon as GitHub, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    github: "#",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    github: "#",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    github: "#",
    email: "alex@example.com",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    github: "#",
    email: "sarah@example.com",
  },
]

export default function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001529] mb-4">Meet Our Team</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of student volunteers works tirelessly to organize events, workshops, and activities
              for the IEEE RSCOE community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001529]">{member.name}</h3>
                  <p className="text-blue-500 mb-4">{member.position}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.github} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <GitHub size={18} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/team">
              <Button className="bg-blue-500 hover:bg-blue-600">View Full Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

