import React from 'react';
import ServicesBlock from './ServicesBlock';
import ModelBlock from './ModelBlock';
import ReviewCarousel from './ReviewCarousel';
import Workflow from './Workflow';
import FAQ from './FAQ';
import WhyChooseUs from './WhyChooseUs';
import architecturalHeroImage from '../../../assets/images/architectural1.jpg';

export default function ArchitecturalHero() {
  return (
   <>
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <div>
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Precision & Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Architectural Drafting Services
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transform your conceptual designs into precise, construction-ready blueprints. 
            We deliver comprehensive drafting solutions tailored for architects, engineers, 
            and developers, ensuring every detail meets strict industry standards.
          </p>
          
          {/* Features List */}
          <ul className="space-y-4">
            {[
              { title: '2D CAD Drafting', desc: 'Detailed floor plans, elevations, and sections.' },
              { title: '3D BIM Modeling', desc: 'Intelligent, data-rich models for seamless coordination.' },
              { title: 'As-Built Drawings', desc: 'Accurate documentation of existing structures.' }
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                {/* Custom Tailwind Checkmark Icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-sm sm:text-base text-slate-700">
                  <strong className="font-semibold text-slate-900">{feature.title}:</strong> {feature.desc}
                </p>
              </li>
            ))}
          </ul>
          
       
        </div>

        {/* Right Side: Image */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={architecturalHeroImage}
              alt="Architectural blueprints and drafting tools"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
    <ServicesBlock/>
    <ModelBlock/>
    <ReviewCarousel/>
    <WhyChooseUs/>
    <Workflow/>
    <FAQ/>
   </>
  );
}