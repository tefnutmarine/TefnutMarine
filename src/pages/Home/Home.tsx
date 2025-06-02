"use client"

import { useState, useEffect } from "react"
import "./Home.css"
import Navbar from "@/components/Navbar"
import ServicesSection from "../ServicesPart/Services"
import About from "../AboutUs/About"
import TestimonialsSection from "../Testimonials/Testimonials"
import ContactPreview from "../Contact/Contact"
import Footer from "@/components/footer"

// Sample slide data - you can replace with your actual content
const slides = [
  {
    id: 1,
    title: "Navigating The Seas",
    subtitle: "With Excellence",
    description:
      "Premier marine services for all your oceanic needs. Expertise you can trust, service you can rely on.",
    image: "https://www.vettingready.com/wp-content/uploads/2024/12/AdobeStock_1004647743-1-scaled.jpeg",
  },
  {
    id: 2,
    title: "Maritime Solutions",
    subtitle: "For Every Journey",
    description: "Comprehensive shipping and logistics services tailored to your specific requirements.",
    image: "https://res.cloudinary.com/dbzdl9adj/image/upload/v1742396439/wmremove-transformed_gtvcto.jpg",
  },
  {
    id: 3,
    title: "Ocean Expertise",
    subtitle: "At Your Service",
    description: "Professional crew and management with decades of combined experience in marine operations.",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&q=80&w=2048",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
    <div className="hero-slider">
      <Navbar/>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
  backgroundSize: 'cover', // Ensures the image covers the entire section
  backgroundPosition: 'center', // Centers the image
  height: '100vh', // Adjust height as needed
  
          }}
        >
          <div className="slide-content" >
            <h1  className="title z-100" >
              {slide.title}
              <span className="subtitle " style={{color:'#0ba1aa'}}>{slide.subtitle}</span>
            </h1>
            <p className="description">{slide.description}</p>
            <div className="buttons">
              <button className="btn btn-primary" style={{background:'#04878f'}}>Our Services</button>
              <button className="btn btn-outline backdrop-blur-md">Contact Us</button>
            </div>
          </div>
        </div>
      ))}

      <button className="arrow arrow-left" onClick={goToPrevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="arrow arrow-right" onClick={goToNextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
    <ServicesSection/>
    <About/>
    <TestimonialsSection/>
    <ContactPreview/>
    <Footer/>
    </>
  )
}

export default HeroSlider

