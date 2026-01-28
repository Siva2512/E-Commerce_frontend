export default function Hero() {
  return (
    <section className="relative w-full h-[90vh]">

      {/* Background Image */}
      <img
        src="/main.png"
        alt="Fashion Banner"
        className="w-full h-full object-cover"
      />

    
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1916]/90 to-[#484a44]/70"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-white font-serif italic text-2xl md:text-3xl mb-4 opacity-90"> Autumn/Winter2024</h1>
        <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto">
          THE NEW <br /> STANDARD
        </h1>
      
        <div className="mt-6 flex gap-4">
          <button className="bg-white uppercase font-bold text-black px-10 hover:text-white py-4  font-medium hover:bg-blue-600 rounded-sm">
            Shop Men
          </button>

          <button className="bg-white uppercase font-bold text-black px-10 hover:text-white py-4  font-medium hover:bg-blue-600 rounded-sm">
            Shop Women
          </button>
        </div>

      </div>
    </section>
  );
}
