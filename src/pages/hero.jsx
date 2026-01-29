import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className=" relative w-full md:h-screen pt-16">

      {/* Background Image */}
      <img
        src="/main.png"
        alt="Fashion Banner"
        className="w-full h-full object-cover object-center"
      />

    
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1916]/90 to-[#484a44]/70 z-0 "></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-16 sm:pt-0">
        <h1 className="text-white font-serif italic text-lg sm:text-xl md:text-3xl mb-3 opacity-90"> Autumn/Winter2024</h1>
        <h1 className="  text-4xl md:text-6xl font-bold text-white md:text-6xl lg:text-7xl">
          THE NEW <br /> STANDARD
        </h1>
      
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-white uppercase font-bold text-black px-6 sm:px-10 py-3 sm:py-4 hover:text-white hover:bg-blue-600 rounded-sm">
            Shop Men
          </button>

          <button className="bg-white uppercase font-bold text-black px-6 sm:px-10 py-3 sm:py-4 hover:text-white hover:bg-blue-600 rounded-sm">
            Shop Women
          </button>
        </div>
        <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
  <ChevronDown size={32} className="text-white opacity-80" />
</div>




      </div>
    </section>
  );
}
