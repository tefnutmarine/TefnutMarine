"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import Navbar from "@/components/Navbar"
interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }
  
  interface FormState {
    isSubmitting: boolean
    isSuccess: boolean
    isError: boolean
    errorMessage: string
  }
  
  interface FormErrors {
    name?: string
    email?: string
    phone?: string
    subject?: string
    message?: string
  }
  
 

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const infoSectionRef = useRef<HTMLDivElement>(null)

  // Animation on scroll
// Animation on scroll
useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const refs = [formSectionRef, infoSectionRef, mapRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    console.log('Form data being sent:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });

    setFormState({
      ...formState,
      isSubmitting: true,
      isSuccess: false,
      isError: false,
    })

    emailjs
      .sendForm(
        "service_a1ytp8p",
        "template_ogopary",
        formRef.current!,
        "gIb6DQkOhCehkZAP_"
      )
      .then((result) => {
        console.log('result',result)
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          errorMessage: "",
        })

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setFormState((prev) => ({
            ...prev,
            isSuccess: false,
          }))
        }, 5000)
      })
      .catch((error) => {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          isError: true,
          errorMessage: "There was an error sending your message. Please try again.",
        })

        console.error("Email sending failed:", error)
      })
  }

 

  const offices = [
    {
      name: "Details...",
      address: "Kerela, Kohi, 94123",
      phone: "+1 (234) 567-890",
      email: "info@marineservices.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    },
   
  ]

  return (
    <>
    <Navbar/>
    <main style={{
        background: 'linear-gradient(to bottom, #006a70,#0a4b70)', // Replace with your desired gradient
      }} className="flex-1 relative overflow-hidden">
      {/* Background wave decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full opacity-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-5 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(to bottom, #006a70,#0a4b70)', // Replace with your desired gradient
      }} className=" py-20 relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20">
          <div className="wave-animation absolute bottom-0 left-0 right-0 h-20 bg-white opacity-10"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              Get In Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
              Have questions or need our services? Contact our team for prompt assistance with your marine needs.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100  text-[#006a70]">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">Available 24/7 for your needs</p>
              <a href="tel:+1234567890" className="text-blue-200 font-medium hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100  text-[#006a70]">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Send us your inquiries anytime</p>
              <a href="mailto:info@marineservices.com" className="text-blue-200 font-medium hover:text-white transition-colors">
                info@marineservices.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100  text-[#006a70]">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100 mb-4">Our headquarters location</p>
              <address className="text-blue-200 font-medium not-italic">
                123 Harbor Drive
                <br />
                Marina Bay, CA 94123
              </address>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6  mx-auto  max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div 
              ref={formSectionRef}
              className="opacity-0 translate-y-10 transition-all duration-1000"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-sm font-medium mb-4">
                <Mail className="h-4 w-4 mr-1" />
                Send Us a Message
              </div>
              <h2 className="text-3xl font-bold text-[#006a70] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. We're here to answer any questions you may have about our marine services.
              </p>

              {formState.isSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {formState.isError && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Error sending message</p>
                    <p>{formState.errorMessage}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder="+1 (234) 567-890"
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder="How can we help you?"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
                <div className="flex items-center">
                 
                </div>
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="inline-flex items-center justify-center rounded-md bg-[#006a70] px-6 py-4 text-base font-medium text-white shadow transition-colors hover:bg-[#008545] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 w-full"
                >
                  {formState.isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div 
              ref={infoSectionRef}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100  text-sm font-medium mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                Our Offices
              </div>
              <h2 className="text-3xl font-bold text-[#006a70] mb-6">Global Presence</h2>
              <p className="text-gray-600 mb-8">
                With offices strategically located around the world, we're able to provide prompt and efficient marine services wherever you need them.
              </p>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-blue-100 rounded-full -mt-12 -mr-12 transition-transform duration-500 group-hover:scale-125"></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-bold  mb-3 flex items-center">
                        {office.name}
                      </h3>
                      
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-3 mt-0.5  text-[#006a70] flex-shrink-0" />
                          <address className="not-italic">{office.address}</address>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 mr-3 mt-0.5  text-[#006a70] flex-shrink-0" />
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover: transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 mr-3 mt-0.5  text-[#006a70] flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:  transition-colors">
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 mr-3 mt-0.5   flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-900 text-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Emergency Support</h3>
                <p className="mb-4">
                  Our emergency response team is available 24/7 for urgent marine assistance.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-300" />
                  <a href="tel:+18001234567" className="text-blue-200 hover:text-white transition-colors font-bold">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6  mx-auto  max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#006a70] text-sm font-medium mb-4">
            
              Quick Answers
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              Find quick answers to common questions about our contact process and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 business hours. For urgent matters, please call our emergency support line.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Do you provide services internationally?</h3>
              <p className="text-gray-600">
                Yes, we operate globally with offices in North America, Europe, and Asia-Pacific regions. Our team can provide marine services worldwide.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How can I request a quote for services?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, specifying the services you're interested in, and providing details about your requirements.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What information should I include in my inquiry?</h3>
              <p className="text-gray-600">
                To help us respond effectively, please include details about your vessel, specific service needs, location, and preferred timeline in your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  relative">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
        <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6"> Ready to Work Together?</h2>
            <p className="text-blue-100 mb-8">
              Our team of marine experts is ready to assist with your project. Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="inline-flex h-12 animate-bounce">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-blue-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </main>
    {/* <Footer/> */}
    </>
  );
}

