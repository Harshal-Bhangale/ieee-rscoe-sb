"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "BLOG", href: "/blog" },
  { name: "SOCIETIES", href: "/societies" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACT US", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleRouteChange = () => {
      setActiveLink(window.location.pathname)
    }

    window.addEventListener("scroll", handleScroll)
    setActiveLink(window.location.pathname)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#001529]/90 backdrop-blur-sm py-2 shadow-md" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          IEEE RSCOE SB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link text-sm font-medium text-white hover:text-blue-400 transition-colors ${activeLink === item.href ? "active-nav-link" : ""
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-white text-[#001529] hover:bg-blue-100 font-medium rounded-md">JOIN NOW</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#001529] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium text-white hover:text-blue-400 transition-colors ${activeLink === item.href ? "text-blue-400" : ""
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-white text-[#001529] hover:bg-blue-100 font-medium w-full">JOIN NOW</Button>
          </div>
        </nav>
      )}
    </header>
  )
}

