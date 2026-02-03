import React from "react";
import Image from "next/image";
// import img1 from "../../public/img5.png";
// import img2 from "../../public/img6.png";
// import img3 from "../../public/img7.png";
// import img4  from "../../public/img3.png";
import ProductCard from "./ProductCard";

const Trending = () => {
 const images = [
  { id: 1, src: "/img5.png", name: "Silk Maxi Dress", price: "$420.00" },
  { id: 2, src: "/img6.png", name: "Métier Tote Bag", price: "$1,150.00" },
  { id: 3, src: "/img7.png", name: "Relaxed Linen Shirt", price: "$185.00" },
  { id: 4, src: "/img3.png", name: "Ankle Boot Noir", price: "$550.00" },
];


  return (
    <section className="w-full bg-[#f9fafb] px-2 py-24">
      <h2 className="font-serif text-3xl mb-12 text-center">
        Complete the Look
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
        
        {images.map((img,index) => (
            <ProductCard key={img.id} cards={img}/>
         
        ))}
      </div>
    </section>
  );
};

export default Trending;
