"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-black/40">
          <button
            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-200">{item.question}</span>
            <ChevronDown 
              className={`h-5 w-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}