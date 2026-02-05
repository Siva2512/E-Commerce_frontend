"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

export default function Cart() {
  const CartItems = [
    {
      id: 1,
      title: "Cashmere Overcoat",
      image: "/img4.png",
      size: "S",
      seller: "Luxe",
      price: 850,
      mrp: 1000,
      qty: 1,
      discount: "20% off",
      delivery: "Wed Feb 11",
    },
    {
      id: 2,
      title: "Silk Maxi Dress",
      image: "/img5.png",
      size: "M",
      seller: "Luxe",
      price: 1200,
      mrp: 1500,
      qty: 1,
      discount: "20% off",
      delivery: "Thu Feb 12",
    },
    {
      id: 3,
      title: "Métier Tote Bag",
      image: "/img6.png",
      size: "L",
      seller: "Luxe",
      price: 950,
      mrp: 1300,
      qty: 1,
      discount: "27% off",
      delivery: "Fri Feb 13",
    },
    {
      id: 4,
      title: "Relaxed Linen Shirt",
      image: "/img7.png",
      size: "XL",
      seller: "Luxe",
      price: 850,
      mrp: 1000,
      qty: 1,
      discount: "20% off",
      delivery: "Sat Feb 14",
    },
  ];

  const [items, setItems] = useState(CartItems);
  const [savedItems, setSavedItems] = useState([]);

  const increaseQty = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const saveForLater = (id) => {
    setItems(prev => {
      const itemToSave = prev.find(item => item.id === id);
      setSavedItems(saved => [...saved, itemToSave]);
      return prev.filter(item => item.id !== id);
    });
  };

  const totalMRP = items.reduce((sum, item) => sum + item.mrp * item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalDiscount = totalMRP - totalPrice;

  return (
    <section className="bg-[#f5f5f7] pt-[72px] pb-12">
      <div className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row gap-6">

          {/* LEFT CARD */}
          <div className="w-full md:basis-[70%] flex flex-col max-h-[80vh]">

            {/* ADDRESS */}
            <div className="bg-white rounded-sm shadow-sm p-4 mb-3 flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                From Saved Addresses
              </h3>
              <button className="text-xs sm:text-sm text-blue-600 border-blue-600 px-3 py-1 rounded">
                Enter Delivery Pincode
              </button>
            </div>

           
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-white rounded-sm shadow-sm">
              {items.map(item => (
                <div
                  key={item.id}
                  className="p-4 md:p-6 flex flex-col md:flex-row gap-4 border-b last:border-b-0"
                >
                  
                  <div className="flex flex-col items-start sm:w-full md:w-auto">
                    <Image
                      src={item.image}
                      alt="product"
                      width={100}
                      height={100}
                      className="object-cover mb-4"
                    />

                    <div className="flex items-center gap-2 sm:mt-2">
                      <button
                        className="w-8 h-8 border rounded-full"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span className="px-5 py-1 border text-sm">
                        {item.qty}
                      </span>
                      <button
                        className="w-8 h-8 border rounded-full"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
                    <div className="flex flex-col justify-between pb-3">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Size: {item.size}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Seller: {item.seller}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-semibold">
                          ₹{item.price * item.qty}
                        </span>
                        <span className="text-xs line-through text-gray-500">
                          ₹{item.mrp * item.qty}
                        </span>
                        <span className="text-xs text-green-600">
                          {item.discount}
                        </span>
                      </div>

                     
                      <div className="flex gap-6 mt-3 sm:mt-4">
                        <button
                          className="text-xs sm:text-sm uppercase font-semibold"
                          onClick={() => saveForLater(item.id)}
                        >
                          Save for later
                        </button>
                        <button
                          className="text-xs sm:text-sm uppercase font-semibold"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                   
                    <div className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
                      Delivery by{" "}
                      <span className="font-semibold">{item.delivery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PLACE ORDER */}
            <div className="sticky bottom-0 bg-white border-t p-4 flex justify-center md:justify-end">
              <button className="w-full md:w-auto bg-black text-white px-6 py-3 uppercase font-semibold">
                PLACE ORDER
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full md:w-[30%]">
            <div className="bg-white rounded-sm shadow-sm p-4">
              <h3 className="font-semibold mb-4">Price details</h3>

              <div className="space-y-5 text-sm">
                <div className="flex justify-between">
                  <span>MRP</span>
                  <span>₹{totalMRP}</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount on MRP</span>
                  <span>-₹{totalDiscount}</span>
                </div>

                <div className="flex justify-between font-semibold border-t pt-4">
                  <span>Total Amount</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              <div className="mt-4 bg-green-50 text-green-700 text-sm p-3 rounded">
                You will save ₹{totalDiscount} on this order
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 mt-4">
              <AiTwotoneSafetyCertificate size={36} />
              <p className="text-xs sm:text-sm">
                Safe and Secure Payments. Easy returns.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
