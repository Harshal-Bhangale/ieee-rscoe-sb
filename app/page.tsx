import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EventsSection from "@/components/events-section"
import SocietiesSection from "@/components/societies-section"
import TestimonialsSection from "@/components/testimonials-section"
import MembershipSection from "@/components/membership-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SocietiesSection />
      <TestimonialsSection />
      <MembershipSection />
      <Footer />
    </main>
  )
}

