"use client"

import { useRef, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import {
  Award,
  Users,
  Clock,
  Globe,
  Anchor,
  Shield,
  Trophy,
  Star,
  Calendar,
} from "lucide-react"


const milestones = [
  {
    year: "2017",
    title: "The Foundation",
    description: "We began our journey, assembling a skilled team to provide high-quality marine and offshore solutions, starting operations in India.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Our expertise grew beyond India as we collaborated with international professionals and gained recognition from major classification societies.",
  },
  {
    year: "2021",
    title: "Strengthening Marine & Offshore Services",
    description: "We expanded our services to include hull inspections, offshore surveys, pipeline gauging, and steel supervision etc",
  },
  {
    year: "2023",
    title: "Comprehensive Repair & Maintenance Solutions",
    description: "We enhanced our capabilities in steel renewal planning, dry dock specifications, corrosion assessments, and structural integrity management.",
  },
  {
    year: "2024",
    title: "Ensuring Marine Excellence",
    description: "We refined our processes in coating inspection, condition monitoring, and outfitting supervision, further improving efficiency and reliability.",
  },
  {
    year: "2025",
    title: "Future-Ready Growth",
    description: "With a strong global presence, we continue to provide top-tier marine and offshore solutions, focusing on safety, compliance, and operational excellence.",
  },
]



const values = [
  {
    icon: Anchor,
    title: "Reliability",
    description: "We deliver on our promises, providing dependable services you can count on in any situation.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Safety is our top priority in all operations, protecting our team, clients, and the environment.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, exceeding expectations and setting new standards.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "With a worldwide presence, we bring international expertise with local understanding to every project.",
  },
]

export default function About() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const teamRef = useRef(null)
  const teamMemberRefs = useRef([])

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
    ;[storyRef, valuesRef, timelineRef, teamRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    teamMemberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
   <>
   <Navbar/>
    <main  className="flex-1 relative overflow-hidden">
      {/* Background wave decorations */}
      <div   className="absolute inset-0 pointer-events-none overflow-hidden">
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
      }} className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20">
          <div className="wave-animation absolute bottom-0 left-0 right-0 h-20 bg-white opacity-10"></div>
        </div>

        <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              About Our Company
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
              Learn about our journey, our values, and the dedicated team behind our exceptional marine services.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#story"
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              Our Story
            </a>
            <a
              href="#values"
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              Our Values
            </a>
            <a
              href="#milestones"
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              Milestones
            </a>
            
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

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
  <div className="container px-6 md:px-8 lg:px-12 xl:px-16  mx-auto  max-w-7xl">
  <div
      ref={storyRef}
      className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center opacity-111 translate-y-10 transition-all duration-1000 mx-auto max-w-7xl "
    >
           <div className="md:pr-8 lg:pr-12 xl:pr-16 ">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#006a70] text-sm font-medium mb-4">
                
                Since 2017
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  text-[#006a70] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                We Organized our company in 2017 with a clear mission: to provide top-tier marine and offshore solutions with precision and reliability. From the very beginning, we built a strong team, not just within India but also expanding our expertise internationally.
                </p>
                <p>
                We collaborated with all major classification societies, ensuring compliance and excellence in every service we offer. Our work includes ultrasonic thickness gauging, structural integrity management, hull inspections, offshore surveys, pipeline gauging, coating assessments, steel supervision, and advanced drone-assisted inspections.
                </p>
                <p>
                We believe in innovation, efficiency, and accuracy. Over the years, our commitment to delivering high-quality solutions has made us a trusted name in the industry. As we continue to grow, we remain dedicated to ensuring safety, compliance, and excellence for all our clients worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#006a70]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Certified Experts</h3>
                    <p className="text-gray-600">Fully certified marine professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#006a70]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Dedicated Team</h3>
                    <p className="text-gray-600">Committed to your success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#006a70]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Always available when you need us</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#006a70]">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Services available worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dbzdl9adj/image/upload/v1742396242/wmremove-transformed_1_yovzg2.jpg"
                  alt="Marine professionals at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div style={{background:'#04878f'}} className="absolute -right-6 -bottom-6  text-white p-6 rounded-lg shadow-xl animate-float">
                <div className="text-4xl font-bold">11+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>

              {/* Decorative elements */}
               
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section  id="values" className="py-20  relative">
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

        <div  className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div ref={valuesRef} className="text-center mb-12 opacity-111 translate-y-10 transition-all duration-1000">
            <div  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100  text-[#006a70] text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-1" />
              Our Principles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  text-[#006a70] mb-4">Our Core Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
              The fundamental principles that guide everything we do at Marine Services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-blue-50 rounded-full -mt-12 -mr-12 transition-transform duration-500 group-hover:scale-125"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[#006a70] group-hover:bg-[#006a70] group-hover:text-white transition-colors duration-300">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold  text-[#006a70] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave separator */}
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

      {/* Milestones Section */}
      <section  style={{
        background: 'linear-gradient(to left ,#0c4a6e,#03182e)', // Replace with your desired gradient
      }} id="milestones" className="py-20 relative z-50">
        <div className="container px-4 md:px-6  mx-auto  max-w-7xl">
          <div ref={timelineRef} className="text-center mb-12 opacit">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100  text-[#006a70] text-sm font-medium mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">Key Milestones</h2>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed">
              Significant moments in our company's history that have shaped who we are today.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 rounded-full"></div>

            <div className="space-y-12" ref={timelineRef}>
    {milestones.map((milestone, index) => (
      <div
        key={index}
        className={`relative flex items-center justify-between ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }  translate-y-10 transition-all duration-1000`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
            <div className="text-[#006a70] font-bold text-xl mb-2">{milestone.year}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
            <p className="text-gray-600">{milestone.description}</p>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="h-8 w-8 bg-blue-500 rounded-full border-4 border-white shadow"></div>
        </div>

        <div className="w-5/12"></div>
      </div>
    ))}
  </div>
          </div>
        </div>
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
      </section>

      
    </main>
    <Footer/>
   </>
  )
}

