import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What level of detail (LOD) do you provide for BIM models?',
    answer: 'We provide standard profiles from conceptual modeling (LOD 200/300) all the way up to fabricator-ready construction layouts containing asset schedules and spatial anchors (LOD 400).'
  },
  {
    question: 'How do you handle coordination changes between different trades?',
    answer: 'Our software tools continually run automated clash audits across MEP and structural models simultaneously, allowing adjustments to happen virtually before construction documentation is issued.'
  },
  {
    question: 'What is your baseline turnaround timeline for conflict resolution?',
    answer: 'Timeline scaling depends heavily on square footage, but initial foundational clash detection reports are generally processed and delivered within 3-5 standard business days.'
  }
];

export default function MepFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="h-1 w-12 bg-[#A43025] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600">Quick answers to common questions about our technical execution process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className={isOpen ? 'text-[#A43025]' : 'text-slate-900'}>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A43025]' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-slate-100 bg-slate-50/50' : 'max-h-0'}`}>
                  <p className="p-5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}