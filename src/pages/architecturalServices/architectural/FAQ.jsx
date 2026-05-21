import React, { useState } from 'react';

const faqData = [
  {
    q: "What typical turnaround speeds can we expect for standard structural packages?",
    a: "Standard residential and light commercial drafting packages typically take 3 to 5 business days, varying according to total square footage and spatial complexity."
  },
  {
    q: "Can NexusEDS output native files directly into our active Revit templates?",
    a: "Yes. We map your specific office parameters, layering structures, title blocks, and item families perfectly into native RVT files."
  },
  {
    q: "How does NexusEDS ensure international architectural code compliance?",
    a: "Our structural drafts are custom tailored around the localized regional guidelines (such as IBC or IRC) supplied by your design managers prior to system engineering."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Answering Your Questions</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-sm transition-colors duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-[#A43025]' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xl font-bold transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-45 text-[#A43025]' : ''}`}>
                    ＋
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-200 bg-slate-50/50' : 'max-h-0'}`}>
                  <p className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}