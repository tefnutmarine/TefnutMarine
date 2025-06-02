"use client"

import { useRef, useEffect } from "react"
import {Wrench,CheckCircle, ArrowRight, } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

const services = [
  {
    id: "Marine",
    icon: Wrench,
    title: "Marine",
    description:
      "We offer marine inspection and survey services, including UTM hull surveys, CAP, URS, pre-docking, and class renewal inspections. Our expertise includes steel estimation, repair planning, drone-assisted close-up surveys, rope access NDT inspections, and coating assessments. We also provide supervision for structural conversions, pipeline inspections, and condition monitoring.",
    longDescription:
      "Additionally, we provide pipeline inspections, coating assessments, and structural integrity management (SIMS). Our team supervises structural conversions, outfitting inspections, and repair processes, ensuring vessel safety, compliance, and longevity.",
    features: [
      "HULL UTM SURVEY FOR ALL TYPES OF SHIPS, BOATS & BARGES",
      "CAP, URS, PRE-DOCKING, INTERMEDIATE, SPECIAL & ANNUAL SURVEY SURVEYS",
	"CLASS ENTRY & RENEWAL SURVEYS",
	"STEEL ESTIMATION, REPAIR PLAN & DRY DOCK SPECIFICATIONS",
	"PRE-PURCHASE HULL INSPECTION",
	"PIT MAPPING SURVEYS",
	"VOYAGE & RAFTING SURVEYS",
	"CLOSE UP INSPECTION BY DRONES",
	"VISUAL INSPECTION & CLOSE UP SURVEYS",
	"STEEL INSPECTORS FOR REPAIR SUPERVISION",
	"SUPERVISION OF STRUCTURAL CONVERSION JOBS",
	"PIPE LINE INSPECTION",
	"ROPE ACCESS INSPECTION (NDT INSPECTION & MAINTENANCE JOBS)",
	"COATING INSPECTION & CALCULATION",
	"SCAFFOLDING & STEEL ESTIMATION",
	"OUTFITTING INSPECTION (HULL & BALLAST TANKS)",
	"STRUCTURAL INTEGRITY MANAGEMENT SYSTEM(SIMS)",
	"CONDITION MONITORING WITH INTRINSICALLY SAFE CAMERAS"
,
    ],
    image: "",
    color: "green",
  },
  {
    id: "Offshore",
    icon: Wrench,
    title: "Offshore",
    description:
      "We offer offshore inspection services, including periodical surveys, hull and leg inspections, pipeline gauging, and corrosion monitoring. Our expertise covers structural integrity surveys, steel renewal planning, and supervision of refurbishment and repairs.",
    longDescription:
      "Our offshore services ensure compliance through periodical surveys, hull and leg inspections, and pipeline gauging, including high-pressure lines. We provide corrosion monitoring for oil and gas pipelines and structural integrity surveys for platforms and rigs. Additionally, we specialize in steel renewal planning and supervision during refurbishment, repairs, and conversions, ensuring safety and reliability.",
    features: [
        	"PERIODICAL SURVEYS FOR OFFSHORE UNITS",
        	"HULL & LEG INSPECTION AS PER CLASS/CLIENT REQUIREMENTS",
        	"PIPE LINE GAUGING INCLUDING HP LINES",
        	"STEEL RENEWAL SEQUENCE PLAN FOR REFURBISHMENT/REPAIR PROJECTS",
        	"STEEL SUPERVISION DURING REFURBISHMENT, REPAIRS & CONVERSIONS",
        	"PERIODICAL CORROSION MONITORING OF PIPE LINES – OIL & GAS",
        	"STRUTURAL INTEGRITY SURVEYS OF PLATFORMS AND RIGS",
        	"CONDITION ASSESSMENT SURVEYS – STRUCTURAL & COATING"
        
    ],
    image: "/placeholder.svg?height=600&width=800&text=Vessel+Maintenance",
    color: "",
  },
  {
    id: "Design",
    icon: Wrench,
    title: "Design",
    description:
      "State-of-the-art navigation systems installation, calibration, and maintenance. We provide cutting-edge technology to ensure accurate navigation and enhanced safety for all marine vessels.",
    longDescription:
      "Modern navigation is all about precision and reliability. Our navigation systems services include installation, calibration, and maintenance of the latest marine navigation technology. We work with leading manufacturers to provide systems that enhance safety, improve efficiency, and meet all regulatory requirements.",
    features: [
      "GPS and GNSS system installation and configuration",
      "Radar system installation and maintenance",
      "Navigation software updates and customization",
      "Integrated bridge systems implementation",
      "Weather monitoring equipment installation",
      "Training for crew on navigation equipment usage",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Navigation+Systems",
    color: "",
  },
  {
    id: "safety",
    icon: Wrench,
    title: "Safety Compliance",
    description:
      "Ensuring your operations meet all marine safety regulations and standards. Our safety experts conduct thorough inspections and provide recommendations to maintain compliance with international regulations.",
    longDescription:
      "Safety at sea is non-negotiable. Our compliance services help vessel owners and operators meet and exceed all relevant safety regulations. We conduct comprehensive audits, provide detailed reports, and offer practical solutions to address any compliance issues, ensuring your operations remain safe and legally compliant.",
    features: [
      "Comprehensive safety audits and inspections",
      "Compliance certification for international standards",
      "Safety equipment inspection and certification",
      "Crew training programs on safety protocols",
      "Documentation management and record-keeping",
      "Risk assessment and mitigation strategies",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Safety+Compliance",
    color: "",
  },
  {
    id: "emergency",
    icon: Wrench,
    title: "Emergency Response",
    description:
      "24/7 emergency response services for all marine-related incidents. Our rapid response team is always ready to provide assistance in critical situations, minimizing damage and ensuring safety.",
    longDescription:
      "When emergencies occur at sea, every minute counts. Our emergency response team is available 24/7 to provide immediate assistance for any marine-related incident. From vessel recovery to oil spill containment, we have the expertise, equipment, and experience to handle critical situations efficiently and effectively.",
    features: [
      "24/7 emergency hotline with immediate response",
      "Rapid deployment teams strategically positioned",
      "Salvage operations for damaged vessels",
      "Oil spill containment and environmental protection",
      "Emergency repairs to restore basic functionality",
      "Coordination with coast guard and authorities",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Emergency+Response",
    color: "",
  },
  {
    id: "docking",
    icon: Wrench,
    title: "Docking Solutions",
    description:
      "Custom docking solutions designed for efficiency and safety. We design, install, and maintain docking facilities tailored to your specific requirements, ensuring smooth operations and vessel protection.",
    longDescription:
      "Our docking solutions combine innovative design with practical functionality. Whether you need a simple mooring system or a complex marina installation, we provide end-to-end services from initial concept to final implementation. Our solutions prioritize safety, efficiency, and environmental sustainability.",
    features: [
      "Custom dock design based on specific requirements",
      "Professional installation by experienced teams",
      "Ongoing maintenance programs to ensure longevity",
      "Upgrade solutions for existing docking facilities",
      "Safety enhancements for all weather conditions",
      "Environmentally friendly materials and practices",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Docking+Solutions",
    color: "",
  },
]

export default function Services() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);


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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <Navbar/>
    <main className="flex-1 relative overflow-hidden">
      {/* Wave background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full opacity-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-5 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(to bottom, #006a70,#0a4b70)', // Replace with your desired gradient
      }} className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 relative ">
        <div className="absolute inset-0 bg-blue-900 opacity-20 ">
          <div className="wave-animation absolute bottom-0 left-0 right-0 h-20 bg-white opacity-10"></div>
        </div>
        <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div className="text-center mb-12 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              <u style={{textDecorationThickness:'1px',textUnderlineOffset:'6px'}}>Our Marine Services</u>
            </h1>
            <p className="text-white md:text-xl/relaxed">
            Welcome to TEFNUT MARINE, a cutting-edge provider of Non-Destructive Testing (NDT)& Marine Designing services committed to ensuring the safety, integrity, and longevity of your assets. With a team of certified and experienced professionals, we specialize in delivering precise and reliable inspection solutions tailored to meet the unique needs of various industries, Global Maritime,Oil and gas,and infrastructure. Our advanced technologies and dedication to quality control allow us to identify potential issues without compromising the structural integrity of your materials, providing you with peace of mind and helping you avoid costly repairs. At TEFNUT MARINE, we are passionate about delivering top-tier NDT & Marine Designing services to help you maintain a safe and efficient operation
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <service.icon className="h-4 w-4 inline-block mr-2" />
                {service.title}
              </a>
            ))}
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6  mx-auto  max-w-7xl">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
              id={service.id}
              key={service.id}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el // ✅ Just assign, don't return
              }}
              className="scroll-mt-20 opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-${service.color}-50 to-white p-1 shadow-xl`}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 rounded-full p-2 shadow-lg"></div>
            
                <div className="bg-[#cfdde9] rounded-xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="order-2 md:order-1 p-8 md:p-10 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-[#078389] mb-4 flex items-center">
                        {service.title}
                      </h2>
            
                      <div className="mb-6 text-gray-700 space-y-4">
                        <p>{service.description}</p>
                        <p>{service.longDescription}</p>
                      </div>
            
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Services:</h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#008545] mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
            
                      <div className="mt-auto">
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 text-white rounded-lg bg-[#04878f] hover:bg-[#4d9291] font-medium"
                        >
                          Request This Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(to bottom, #006a70,#0a4b70)', // Replace with your desired gradient
      }} className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 relative">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg
            className="relative block w-full h-12"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Marine Solution?</h2>
            <p className="text-blue-100 mb-8">
              Our team of experts is ready to develop tailored solutions for your specific marine needs. Contact us
              today to discuss how we can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

     
    </main>
    <Footer/>
    </>
  )
}

