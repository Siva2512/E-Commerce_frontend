import React from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import img1 from "../../public/img4.png";
import img2 from "../../public/img5.png";
import img3 from "../../public/img6.png";
import img4 from "../../public/img7.png";

const Page3 = () => {
  const images = [
    { id: 1, src: img1, name: "Cashmere Overcoat", category: "Outerwear", price: "$850.00" },
    { id: 2, src: img2, name: "Silk Maxi Dress", category: "Dresses", price: "$420.00" },
    { id: 3, src: img3, name: "Métier Tote Bag", category: "Accessories", price: "$1,150.00" },
    { id: 4, src: img4, name: "Relaxed Linen Shirt", category: "Shirts", price: "$250.00" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">

      <h2 className="text-4xl font-serif text-center mb-10">Trending Now</h2>

      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-mandatory  scrollbar-hide px-4 pr-20">
        {images.map((img) => (
          <div key={img.id} className="group text-left min-w-[85%] sm:min-w-[300px] md:min-w-[350px] flex flex-col items-center mx-auto">

            {/* Image Box */}
            <div className="relative h-[450px] w-full overflow-hidden">

              <Image
                src={img.src}
                alt={img.name}
                className="object-cover transition scale-105 h-full duration-700 group-hover:scale-110"
              />

              {/* Hover Button */}
              {/* <button className="absolute bottom-0  w-full bg-black text-white py-3 text-sm font-medium opacity-0 translate-y-full group-hover:translate-y-0">
      ADD TO BAG
    </button> */}

                <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full flex justify-center items-center gap-2 bg-gray-950 text-white py-4 text-xs font-bold uppercase tracking-widest">
                    <BsPlusLg />
                    Add to Bag
                  </button>
                </div>

            </div>

            {/* Product Info */}
            <h5 className="mt-2 bottom-0 text-sm font-bold uppercase tracking-tight  ">
              {img.name}
            </h5>

            <p className="text-xs text-gray-500 uppercase mt-1 tracking-widest">
              {img.category}
            </p>

            <p className="mt-2 font-serif text-lg">
              {img.price}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Page3;
