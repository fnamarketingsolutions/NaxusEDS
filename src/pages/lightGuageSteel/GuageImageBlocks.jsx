import React from 'react';
import lightGuageSteelImage1 from '../../assets/images/light-guage-steel1.jpg';
import lightGuageSteelImage2 from '../../assets/images/light-guage-steel2.avif';
import lightGuageSteelImage3 from '../../assets/images/light-guage-steel3.webp';
import lightGuageSteelImage4 from '../../assets/images/light-guage-steel4.jpg';
import lightGuageSteelImage5 from '../../assets/images/light-guage-steel5.jpg';
import lightGuageSteelImage6 from '../../assets/images/light-guage-steel6.jpg';
import lightGuageSteelImage7 from '../../assets/images/light-guage-steel7.jpg';
import lightGuageSteelImage8 from '../../assets/images/light-guage-steel8.webp';
import lightGuageSteelImage9 from '../../assets/images/light-guage-steel9.webp';

export default function GuageImageBlocks() {
  // Array holding 9 distinct image urls for standard img tags
  const galleryImages = [
    lightGuageSteelImage1,
    lightGuageSteelImage2,
    lightGuageSteelImage3,
    lightGuageSteelImage4,
    lightGuageSteelImage5,
    lightGuageSteelImage6,
    lightGuageSteelImage7,
    lightGuageSteelImage8,
    lightGuageSteelImage9,
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