import { FaAward } from "react-icons/fa";

export default function OurStory() {
  return (
    <>
      <section className="w-full bg-[#F6F6F8] py-12 sm:py-20 md:py-24">
        
        {/* CENTER CONTENT */}
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
           <div className="w-12 h-12   flex items-center justify-center">
            <FaAward className="text-5xl text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl mb-6 leading-tight">
            Crafting the future of fashion through 
            intentional design and sustainable 
            luxury.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            At LUXE, we believe that style should be effortless, and luxury should be conscious.
            Every piece in our collection is crafted with the highest quality materials and ethical practices.
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-block mt-10 text-sm font-semibold tracking-widest uppercase border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition"
          >
            Our Story
          </a>

        </div>
      </section>

      {/* Bottom Line */}
      <hr className="border-t border-gray-200 w-full" />
    </>
  );
}
