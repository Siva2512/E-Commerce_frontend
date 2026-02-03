import React from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
// import img1 from "../../public/img4.png";
// import img2 from "../../public/img5.png";
// import img3 from "../../public/img6.png";
// import img4 from "../../public/img7.png";

const TrendingProducts = () => {
 const images = [
  { id: 1, src: "/img4.png", name: "Cashmere Overcoat", category: "Outerwear", price: "$850.00" },
  { id: 2, src: "/img5.png", name: "Silk Maxi Dress", category: "Dresses", price: "$420.00" },
  { id: 3, src: "/img6.png", name: "Métier Tote Bag", category: "Accessories", price: "$1,150.00" },
  { id: 4, src: "/img7.png", name: "Relaxed Linen Shirt", category: "Shirts", price: "$250.00" },
];


  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">

      <h2 className="text-4xl font-serif text-center mb-10">Trending Now</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-10 ">
        {images.map((img) => (
          <div key={img.id} className="group min-w-[85%] sm:min-w-[300px] md:min-w-[350px] flex flex-col items-start mx-auto">

            {/* Image Box */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <Image
        src={img.src}
        alt={img.name}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"/>
        </div>
     
     {/* Add to bag */}
    <div className="w-full bg-gray-950 text-white py-3 text-xs font-bold uppercase tracking-widest flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
      <BsPlusLg /> Add to Bag</div>
      
      
      {/* Product Info */}
      
      <h5 className="mt-2 bottom-0 text-sm font-bold uppercase tracking-tight  ">
        {img.name}</h5>
        <p className="text-xs text-gray-500 uppercase mt-1 tracking-widest">
          {img.category}</p>
          <p className="mt-2 font-serif text-lg">
            {img.price}</p>
             </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
