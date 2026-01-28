import { ArrowRight } from "lucide-react";

export default function CuratedStories (){

    return(

        <section className="max-w-7xl mx-auto px-4 py-8">
         {/* Heading */}
       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6" > 
      <div className="mb-4">
        <h2 className="text-4xl font-serif font-medium">Curated Stories</h2>
        <p className="text-gray-500 text-lg mt-2 max-w-xl">
         Explore our meticulously crafted collections designed for the modern lifestyle.
        </p>
      </div> 
      <a href="#" className="group flex items-center font-serif gap-2 text-sm mt-6 md:mt-0 font-bold uppercase">View All Categories 
         <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
      </a>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
        {/* left crad */}
        <div className="md:col-span-7 relative group overflow-hidden bg-gray-200 h-full ">
            <img 
            src="/img1.png"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-semibold">The winter Edit</h3>
                <p className="text-sm text-gray-200 mt-1">
              Timeless silhouettes for the colder months.</p>
            <button className="mt-3 bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium">
              Discover
            </button>
            </div>
        </div>

        {/* right card */}

        <div className="md:col-span-5 flex flex-col gap-6 h-full">

            {/* right-top-card */}

            <div className="flex-1 relative group overflow-hidden bg-gray-200  aspect-[4/3]">
            <img 
            src="/img2.png"
            alt="Fashion Banner"
            className="w-full  object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-semibold">Essential Knits</h3>
                <p className="text-sm text-gray-200 mt-1">Softness meets sophistication</p>
            <button className="mt-3 text-white text-sm font-medium underline underline-offset-4 hover:text-gray-300 transition">
                Shop Now
            </button>

            </div>
        </div>

        {/* right-bottom-card */}
        <div className="flex-1 relative group overflow-hidden bg-gray-200  aspect-[4/3]">
            <img 
            src="/img3.png"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif font-semibold">Evening Noir</h3>
                <p className="text-sm text-gray-200 mt-1">Elegance defined by midnight hues.</p>
            <button className="mt-3 text-white text-sm font-medium underline underline-offset-4 hover:text-gray-300 transition">
                Shop Now
            </button>
            </div>
        </div>

        </div>
      </div>
        </section>
    );
}