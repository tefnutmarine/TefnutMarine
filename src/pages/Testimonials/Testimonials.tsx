"use client"

import { useRef, useEffect, useState } from "react"

import { Quote } from "lucide-react"
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    content:
      "The marine services provided by this company have been exceptional. Their team's expertise and attention to detail ensured our vessels were always in optimal condition.",
    author: "Captain Michael Johnson",
    role: "Fleet Manager, OceanTech Shipping",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "We've been working with this team for over 5 years, and their consistent quality and reliability have made them our go-to marine service provider. Highly recommended!",
    author: "Sarah Williams",
    role: "Operations Director, Marine Solutions Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "Their emergency response team saved our vessel during a critical situation. Their quick thinking and professional approach made all the difference. We're forever grateful.",
    author: "Robert Chen",
    role: "Vessel Owner, Pacific Marine",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(to bottom, #006a70,#0a4b70)', // Replace with your desired gradient
      }}
      className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000"
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5" />
        <div className="wave-animation absolute bottom-0 left-0 right-0 h-20 bg-white opacity-10" />
      </div>

      <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
            Hear from the companies and individuals who trust our marine services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Quote style={{color:'white'}} className="absolute top-0 left-0 h-16 w-16 text-blue-400/30 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <p className="text-white text-xl md:text-2xl italic mb-8 max-w-3xl">"{testimonial.content}"</p>

                <div className="flex flex-col items-center">
                  
                  <div className="text-white font-bold">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      
    </section>
  )
}

