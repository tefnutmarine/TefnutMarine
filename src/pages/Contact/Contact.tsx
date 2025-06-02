"use client"

import { useRef, useEffect } from "react"

import { ChevronRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white relative opacity-111 translate-y-10 transition-all duration-1000  ">
      <div className="container px-4 md:px-6  mx-auto  max-w-7xl ">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mb-4" style={{color:'#04878f'}}>
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Have questions or need our services? Contact our team for prompt assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{color:'#04878f'}}>
          <div
            ref={(el) => {
                (cardsRef.current[0] = el)
            }}
            className="bg-blue-50 rounded-lg p-6 text-center shadow-md opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "100ms",color:'#55b1be',backgroundColor:'' }}
          >
            <div  style={{color:'#04878f'}} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Phone className="h-6 w-6" />
            </div>
            <h3  style={{color:'#04878f'}} className="text-xl font-bold text-blue-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7 for your needs</p>
            <a href="tel:+1234567890"  style={{color:'#04878f'}} className="text-blue-600 font-medium hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          <div
            ref={(el) =>{
                (cardsRef.current[1] = el)
            }}
            className="bg-blue-50 rounded-lg p-6 text-center shadow-md opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "200ms" }}
          >
            <div  style={{color:'#04878f'}} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Mail className="h-6 w-6" />
            </div>
            <h3  style={{color:'#04878f'}} className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your inquiries anytime</p>
            <a href="mailto:info@marineservices.com"  style={{color:'#04878f'}} className="text-blue-600 font-medium hover:underline">
              info@marineservices.com
            </a>
          </div>

          <div
            ref={(el) => {
                (cardsRef.current[2] = el)
            }}
            className="bg-blue-50 rounded-lg p-6 text-center shadow-md opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "300ms" }}
          >
            <div  style={{color:'#04878f'}} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3  style={{color:'#04878f'}} className="text-xl font-bold text-blue-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our headquarters location</p>
            <address  style={{color:'#04878f'}} className="text-blue-600 font-medium not-italic">
              123 Harbor Drive
              <br />
              Marina Bay, CA 94123
            </address>
          </div>
        </div>

        <div className="mt-16 text-center ">
          <a
            href="/contact"
            style={{background:'#04878f'}}
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          >
            Contact Us Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>

      
    </section>
  )
}

