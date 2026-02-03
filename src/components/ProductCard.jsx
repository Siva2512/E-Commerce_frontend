import Image from "next/image";

const ProductCard = ({ cards }) => {
  return (
    <div className="flex flex-col items-start">
      
      <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden">
        <Image
          src={cards.src}
          alt={cards.name}
         fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="px-4 mt-3">
        <h5 className="mb-1 text-[10px] font-bold uppercase tracking-tight">
          {cards.name}
        </h5>

        <p className=" font-serif text-lg">
          {cards.price}
        </p>
      </div>

    </div>
  );
};

export default ProductCard;
