import React from 'react';

const services = [
  {
    title: "Architectural Drafting",
    description: "Precise 2D CAD drafting, floor plans, and elevation drawings tailored to strict building codes.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "3D BIM Modeling",
    description: "Intelligent, data-rich Revit models ensuring seamless cross-discipline coordination.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "As-Built Documentation",
    description: "Accurate field-verified digitization of existing structures for renovation and expansion.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ServicesBlock() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">What We Do</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our Specialized Engineering Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-300 hover:border-slate-400 shadow-sm transition-colors duration-300 flex flex-col">
              <div className="h-56 w-full overflow-hidden border-b border-slate-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a href="#" className="text-sm font-semibold text-[#A43025] hover:text-[#82241b] inline-flex items-center gap-1 transition-colors">
                    Learn More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}