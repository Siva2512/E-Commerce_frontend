import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className=" relative w-full h-screen pt-16">

      {/* Background Image */}
      <img
        src="/main.png"
        alt="Fashion Banner"
        className="w-full h-full object-cover object-center"
      />

    
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="font-serif italic text-base sm:text-lg md:text-2xl mb-2 opacity-90">Autumn / Winter 2024</h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          THE NEW <br /> STANDARD</h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-white uppercase font-bold text-black px-6 sm:px-10 py-3 sm:py-4 hover:text-white hover:bg-blue-600 rounded-sm">
            Shop Men
          </button>

          <button className="bg-white uppercase font-bold text-black px-6 sm:px-10 py-3 sm:py-4 hover:text-white hover:bg-blue-600 rounded-sm">
            Shop Women
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <ChevronDown size={32} className="text-white opacity-80" />
        </div>
      </div>
    </section>
  );
}
