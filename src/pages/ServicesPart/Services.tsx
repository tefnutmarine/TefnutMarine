import { useRef } from "react";
import { Anchor, Compass, Shield, Wrench, LifeBuoy, Ship, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ultrasonic Thickness Gauging (UTG)",
    description:
      "non-destructive testing method used to measure material thickness and detect corrosion or wear in structures.",
    link: "/services",
  },
  {
    icon: Wrench,
    title: "Vessel Maintenance",
    description: "Comprehensive maintenance and repair services to keep your vessels in optimal condition.",
    link: "/services",
  },
  {
    icon: Compass,
    title: "Marine & Offshore Design Services",
    description: "Our design services cover structural planning,detailed engineering for marine, offshore, and industrial projects",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Ensuring your operations meet all marine safety regulations and standards.",
    link: "/services#safety",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Response",
    description: "24/7 emergency response services for all marine-related incidents.",
    link: "/services#emergency",
  },
  {
    icon: Anchor,
    title: "Docking Solutions",
    description: "Custom docking solutions designed for efficiency and safety.",
    link: "/services#docking",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  

 

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(to bottom,#0c4a6e,#0c4a6e)', // Replace with your desired gradient
      }}
      className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 opacity-111  translate-y-0 transition-all duration-1000"
    >
       {/* Decorative wave pattern */}
       <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full opacity-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#04878f"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5" />

      <div className="container px-4 md:px-6 relative  mx-auto  max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Our Marine Services
          </h2>
          <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
            Comprehensive solutions for all your marine needs, delivered with expertise and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-6  transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-blue-100/80 mb-4">{service.description}</p>

              <a
                href={service.link}
                className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
              >
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>

              <div className="absolute bottom-0 right-0 h-24 w-24 bg-blue-400/10 rounded-full -mr-12 -mb-12 group-hover:bg-blue-400/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"

            className=" bg-[#04878f] inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
} 