"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Technical Workshop on AI",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join us for an interactive workshop on Artificial Intelligence and its applications in various domains.",
    link: "/events/technical-workshop",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    date: "April 10-12, 2025",
    image: "/placeholder.svg?height=400&width=600",
    description: "A 48-hour coding marathon to solve real-world problems using technology and innovation.",
    link: "/events/hackathon",
  },
  {
    id: 3,
    title: "Industry Expert Talk",
    date: "May 5, 2025",
    image: "/placeholder.svg?height=400&width=600",
    description: "Learn from industry experts about the latest trends and technologies in the field of engineering.",
    link: "/events/expert-talk",
  },
]

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-gray-50" id="events">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001529] mb-4">Our Events</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and activities designed to enhance your technical skills
              and knowledge.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                  activeTab === "upcoming" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                  activeTab === "past" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-[#001529] mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link href={event.link}>
                    <Button variant="ghost" className="text-blue-500 p-0 hover:bg-transparent hover:text-blue-700">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button className="bg-blue-500 hover:bg-blue-600">View All Events</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

