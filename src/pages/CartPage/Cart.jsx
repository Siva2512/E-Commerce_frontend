import React from 'react'
import Image from "next/image";

export default function Cart() {
  return (
    <>
      <section className="text-gray-600 body-font py-20">
        <div className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

            {/* left card */}
            <div className="md:basis-[70%] md:shrink-0 bg-white rounded-sm shadow-sm p-4">

              {/* address section */}
              <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  From Saved Addresses
                </h3>
                <button className="text-blue-600 border px-3 py-1 rounded text-sm">
                  Enter Delivery Pincode
                </button>
              </div>

              {/* cart items */}
              <div className="p-4 flex gap-5">
                <Image
                  src="/img4.png"
                  alt="dress"
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />

                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 uppercase">
                    Cashmere Overcoat
                  </h3>
                  <p className="text-xs text-gray-500">Size: s</p>
                  <p className="text-xs text-gray-500">Seller: Luxe</p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ₹850.00
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      ₹1000
                    </span>
                    <span className="text-xs text-green-600">
                      20% off
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center border rounded gap-2">
                      <button className="p-2">-</button>
                      <span className="p-2">1</span>
                      <button className="p-2">+</button>
                    </div>
                    <button className="text-xs text-blue-600">
                      Save for later
                    </button>
                    <button className="text-xs text-red-600">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-3">
                  Delievery by <br />
                  <span className="font-semibold">
                    Wed Feb 11
                  </span>
                </div>
              </div>

              {/* place order */}
              <div className="p-4 border-t flex justify-end">
                <button className="bg-orange-600 uppercase font-semibold text-white px-4 py-3 hover:bg-orange-700">
                  PLACE ORDER
                </button>
              </div>
            </div>

            {/* right side */}
            <div className=" md:basis-[30%] md:shrink-0 bg-white rounded-sm shadow-sm p-4">
                
              <h3 className="font-semibold text-gray-900 mb-4">
                Price details
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>MRP</span>
                  <span>₹1000</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount on MRP</span>
                  <span>-₹150</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Coupon Discount</span>
                  <span>₹50</span>
                </div>

                <hr />

                <div className="flex justify-between font-semibold text-base">
                  <span>Total Amount</span>
                  <span>₹850</span>
                </div>
              </div>

              <div className="mt-4 bg-green-50 text-green-700 text-sm p-3 rounded">
                You will save ₹150 on this order
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
