import React from 'react';

const facadeCategories = [
  {
     title: "Unitized Curtain Wall",
    desc: "Factory-assembled and glazed facade modules shipped directly to the construction site for rapid high-rise installation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
   },
  {
     title: "Stick Curtain Wall",
    desc: "Versatile, field-installed framing systems where components are assembled piece-by-piece for design flexibility.",
    image: "https://images.unsplash.com/photo-1554232456-8727aae91df4?auto=format&fit=crop&w=500&q=80",
   },
  {
     title: "Point-Supported Glazing",
    desc: "High-transparency architectural glass systems utilizing stainless steel spiders or structural glass fins.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
   },
  {
     title: "Ventilated Rainscreen",
    desc: "Advanced multi-layered exterior wall solutions featuring rear-ventilated cavities to optimize moisture control.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
   }
];

export default function FacadeCategories() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            Classification Matrix
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Facade Engineering Categories
          </h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {facadeCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm group rounded-xl overflow-hidden"
            >
              <div>
                {/* Upper Side: Image Block Frame */}
                <div className="h-44 w-full overflow-hidden relative border-b border-slate-300 bg-slate-50">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                </div>

                {/* Content Block Area */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight min-h-[56px] flex items-center border-b border-slate-100 pb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[72px]">
                    {category.desc}
                  </p>
                </div>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}