import React from 'react';

export default function GuageImageBlocks() {
  // Array holding 9 distinct image urls for standard img tags
  const galleryImages = [
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1513828583835-c54171a79869?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3dad3785?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80"
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl relative inline-block pb-4">
            Our Fabrication Portfolio
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#A43025]"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            A comprehensive look at our recent structural steel components and precision on-site installations.
          </p>
        </div>

        {/* The 9-Image Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-md aspect-[4/3] bg-gray-200 shadow-sm group">
              <img 
                src={src} 
                alt={`Steel Fabrication Project ${index + 1}`} 
                className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}