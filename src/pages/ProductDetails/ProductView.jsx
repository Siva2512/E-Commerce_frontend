"use client";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import ProductAccordion from "./ProductAccordion";

import Image from "next/image";
import { useState } from "react";

import Trending from "@/components/Trending";


export default function ProductPage() {
  const images = [
    "/img4.png",
    "/img2.png",
    "/main.png",
    "/img1.png",
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selected, setSelected] = useState("S");
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <>
    <section className="pt-32 pb-24 max-w-7xl mx-auto px-6 border-t border-gray-200">
      <div className="flex flex-col md:grid md:grid-cols-1 lg:flex lg:flex-row gap-8 mx-auto">
        <div className="w-full lg:w-[60%]">
          <div className="md:grid md:grid-cols-12 md:gap-6 lg:flex lg:gap-6">
            <div className="hidden md:flex flex-col gap-4 w-full md:col-span-2 lg:w-20">
              {images.map((img, i) => (
                <button key={i} onClick={() => setMainImg(img)}>
                  <Image
                    src={img}
                    width={20}
                    height={25}
                    className={`border object-cover w-full h-full opacity-70 hover:opacity-100  ${
                      mainImg === img ? "border-black" : "border-gray-200"
                    }`}
                    alt="thumb"
                  />
                </button>
              ))}
            </div>
            
            <div className="w-full md:col-span-10 lg:flex-1">
              <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden group">
                <Image
                  src={mainImg}
                  alt="product"
                  fill
                  priority
                  className="object-cover w-full h-full"
                />

                <button className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition">
                  <MdFavoriteBorder className="w-5 h-5" />
                </button>
              </div>
                <div className="flex md:hidden gap-3 w-full overflow-x-auto py-4 mb-4">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImg(img)}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-24 border border-gray-200">
                    <Image
                      src={img}
                      width={80}
                      height={96}
                      className={`object-cover w-full h-full ${
                        mainImg === img ? "opacity-100" : "opacity-70"
                      }`}
                      alt="thumb"
                    />
                  </div>
                </button>
              ))}
            </div> 
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] mt-8 md:mt-12 lg:mt-0">
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-4">
              The Winter Edit — Outerwear
            </h4>
            <h1 className="font-serif mb-5 text-4xl md:text-5xl text-black">
              Cashmere Overcoat
            </h1>
            <p className="font-serif text-2xl text-[#4b5563]">
              $850.00
            </p>
            <div className="mb-10 mt-8">
              <p className="text-[#4b5563] leading-relaxed italic mb-10 text-lg md:text-xl font-serif">
                A study in quiet luxury. Crafted from the finest Italian cashmere, this
                overcoat is tailored for a structured yet fluid silhouette. Designed for
                timeless winter layering, it delivers exceptional warmth without weight.
              </p>
            </div>
          </div>   
          <div className="mt-0">
            <div className="flex justify-between items-center mb-4 my-2">
              <p className="text-xs font-bold">SELECT SIZE</p>
              <p className="text-xs text-gray-400 cursor-pointer hover:text-black">
                Size Guide
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected(s)}
                  className={`w-11 h-11 border rounded-full text-sm font-medium transition ${
                    selected === s
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full mx-auto">
            <button className="mt-10 w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-gray-800 transition">
              Add to Bag
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4 mt-8 border-y border-gray-100">
              <div className="flex items-center gap-2 uppercase">
                <MdOutlineLocalShipping />
                <p className="text-[10px] font-semibold text-gray-400">
                  FREE SHIPPING WORLDWIDE
                </p>
              </div>

              <div className="flex items-center gap-2 uppercase">
                <FiCheckCircle />
                <p className="text-[10px] font-semibold text-gray-400">
                  IN STOCK
                </p>
              </div>
            </div>
            
            <ProductAccordion />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}