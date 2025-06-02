
import {  Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer   style={{
      background: 'linear-gradient(to right, #010203,#0c4a6e)', // Replace with your desired gradient
    }} className="bg-blue-900 text-white">
      <div className="container mx-auto px-20 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              
              <span className="text-xl font-bold w-30"><img src="images/logo_with_text.png" alt="tefnut_logo" /></span>
            </a>
            <p className="text-blue-100/80 max-w-xs">
              Premier marine services for all your oceanic needs. Expertise you can trust, service you can rely on.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                {/* <aedin className="h-5 w-5" /> */}
                <span className="sr-only">aedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2"  style={{color:'white'}}>
              <li>
                <a href="/services#transport" className="text-blue-100 hover:text-white transition-colors">
                  Marine 
                </a>
              </li>
              <li>
                <a href="/services#maintenance" className="text-blue-100 hover:text-white transition-colors">
                  Offshore
                </a>
              </li>
              <li>
                <a href="/services#navigation" className="text-blue-100 hover:text-white transition-colors">
                  Desings
                </a>
              </li>
              <li>
                <a href="/services#safety" className="text-blue-100 hover:text-white transition-colors">
                  Safety Compliance
                </a>
              </li>
              <li>
                <a href="/services#emergency" className="text-blue-100 hover:text-white transition-colors">
                  Emergency Response
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
            <li>
                <a href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/service" className="text-blue-100 hover:text-white transition-colors">
                  Service
                </a>
              </li>
              
              <li>
                <a href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-blue-100">
              <p> No. AGP-16-180, Nr Iqbal School,</p>
              <p>Kolavayal PO ,</p>
              <p>Kerala - India ,Pin-671531</p>
              <p className="pt-2">
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                 +91 8129096414 <br />
              +91 6235656414
                </a>
              </p>
              <p>
                <a href="mailto:info@marineservices.com" className="hover:text-white transition-colors">
                  info@marineservices.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-1 border-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100/80 text-sm">
            &copy; {new Date().getFullYear()} Marine Services. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors">
            Reliable, Precise, Innovative
            </a>
            <a href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors">
            Marine & Offshore Solutions.
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

