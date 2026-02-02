import React from "react";
import Image from "next/image";
import img1 from "../../public/img5.png";
import img2 from "../../public/img6.png";
import img3 from "../../public/img7.png";
import img4 from "../../public/img3.png";

const Page2 = () => {
  const images = [
    { id: 1, src: img1, name: "Silk Maxi Dress",  price: "$420.00" },
    { id: 2, src: img2, name: "Métier Tote Bag",  price: "$1,150.00" },
    { id: 3, src: img3, name: "Relaxed Linen Shirt",  price: "$185.00" },
    { id: 4, src: img4, name: "Ankle Boot Noir",  price: "$550.00" },
  ];

  return (
    <section className="w-full bg-[#f9fafb] px-2 py-24">
        
      <h2 className="font-serif text-3xl mb-12 text-center">
        Complete the Look
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="flex flex-col items-start"
          >
            
           <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden">
                
              <Image
                src={img.src}
                alt={img.name}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* PRODUCT INFO */}
            <div className="p-5">
            <h5 className="mb-4 text-[10px] font-bold uppercase tracking-tight">
    
              {img.name}
            </h5>

            <p className="mt-2 font-serif text-lg">
              {img.price}
            </p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page2;
