export default function OurStory() {
  return (
    <>
      {/* FULL WIDTH BG SECTION */}
      <section className="w-full bg-[#F6F6F8] py-24">
        
        {/* CENTER CONTENT */}
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 border-2 border-blue-600 rounded-full flex items-center justify-center">
              ⭐
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            Crafting the future of fashion through <br />
            intentional design and sustainable <br />
            luxury.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
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
