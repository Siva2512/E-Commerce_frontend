"use client";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function ProductAccordion() {
  const [open, setOpen] = useState(null);

  const items = [
    {
      title: "DETAILS & FIT",
      content:(
        <>
        <p className="text-sm text-gray-600 leading-relaxed">
            Designed for a relaxed, tailored fit. Our model is 6'2" and wears a size Small.
            </p>

         <ul className="list-disc pl-4 mt-4 space-y-2">
        <li>Peak lapel and structured shoulders</li>
        <li>Double-breasted front with horn buttons</li>
        <li>Two internal welt pockets</li>
        <li>Back vent for movement</li>
      </ul>
        </>
      )
    },
    {
      title: "COMPOSITION & CARE",
      content:(
        <>
        <p className="mb-2 font-semibold">100% Mongolian Cashmere</p>
        <p>Lining: 100% Cupro. Professional dry clean only. Store on a wide-shoulder hanger to maintain silhouette.</p>
        </>
      ) 
    },
    {
      title: "SHIPPING & RETURNS",
      content:
        "Complimentary express shipping on all orders over $500. Returns are accepted within 14 days of receipt for a full refund or exchange. Items must be in original condition with all tags attached.",
    },
  ];

  return (
    <div className=" bg-[#fcfcfc] py-0 w-full border-t border-gray-200" >
      {items.map((item, index) => (
        <div key={index} className={`${ 
            index !== items.length - 1 ? "border-b border-gray-200" : ""
         }`} >
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex justify-between items-center py-6 text-left"
          >
            <span className="text-xs font-bold font-sans tracking-widest">
              {item.title}
            </span>

            <IoChevronDownOutline
              className={`text-lg transition-transform duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === index ? "max-h-40 pb-6" : "max-h-0"
            }`}
          >
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
  {item.content}
</div>

          </div>
        </div>
      ))}
    </div>
  );
}
