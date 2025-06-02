import { useRef, useEffect } from "react";
import { ChevronRight, Award, Users, Clock, Globe } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
     <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden  transition-all duration-1000"
    >
      {/* Decorative wave pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          />
        </svg>
      </div>

       <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div ref={imageRef} className="relative   transition-all duration-1000 delay-300">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://res.cloudinary.com/dbzdl9adj/image/upload/v1742396242/wmremove-transformed_1_yovzg2.jpg" // Use standard <img> tag
            alt="Marine professionals at work"
            className="object-cover w-full h-full" // Ensure the image covers the container
          />
        </div>

        {/* Floating stats */}
        <div className="absolute -right-6 -bottom-6 text-white p-6 rounded-lg shadow-xl"style={{background:'#04878f'}}>
          <div className="text-4xl font-bold">11+</div>
          <div className="text-blue-100">Years Experience</div>
        </div>
      </div>

      <div ref={contentRef} className=" transition-all duration-1000 delay-300">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6" style={{color:'#04878f'}}>
          Marine Excellence <br />
          <span className="" style={{color:'#55b1be'}}>Since 2017</span>
        </h2>

        <p className="text-gray-600 mb-6 text-lg">
        We Organized our company in 2017 with a clear mission: to provide top-tier marine and offshore solutions with precision and reliability. From the very beginning, we built a strong team, not just within India but also expanding our expertise internationally. Our team of experts is dedicated to providing the highest quality services to
          meet all your marine needs.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-start">
            <div style={{color:'#04878f'}} className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Certified Experts</h3>
              <p className="text-gray-600">Fully certified marine professionals</p>
            </div>
          </div>

          <div className="flex items-start">
            <div style={{color:'#04878f'}} className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Dedicated Team</h3>
              <p className="text-gray-600">Committed to your success</p>
            </div>
          </div>

          <div className="flex items-start">
            <div style={{color:'#04878f'}} className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Always available when you need us</p>
            </div>
          </div>

          <div style={{color:'#04878f'}} className="flex items-start">
            <div style={{color:'#04878f'}} className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Global Reach</h3>
              <p className="text-gray-600">Services available worldwide</p>
            </div>
          </div>
        </div>

        <a
          href="/about"
          style={{background:'#04878f'}} // Use standard <a> tag for navigation
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        >
          About Our Company
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
    </section>
  );
}