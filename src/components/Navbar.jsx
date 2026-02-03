import { Search, ShoppingBag, User } from "lucide-react";
import { MdOutlineDiamond } from "react-icons/md";



export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 border-b-transparent fixed top-0 left-0 z-50 backdrop-blur-md ">
      {/* w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-black/5  */}
      
      <div className="mx-auto flex  max-w-7xl items-center justify-between px-2 py-4 uppercase text-sm tracking-widest">

        {/* LEFT MENU */}
        <div className="hidden sm:flex gap-8 whitespace-nowrap font-sans text-[12px] ">
          <a className="text-xs uppercase font-sans font-semibold hover:text-[#1152d4]" href="#">NEW ARRIVALS</a>
          <a className="text-xs uppercase  font-sans font-semibold hover:text-[#1152d4]" href="# ">COLLECTIONS</a>
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-2 text-3xl font-serif font-bold tracking-wider
                 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <MdOutlineDiamond className="text-3xl text-blue-600" />
          LUXE
        </div>

        {/* RIGHT MENU */}

        <div className="flex items-center gap-6 font-medium font-sans text-[12px] 
                justify-end sm:justify-end col-start-3 sm:col-start-3">
                  <a className=" hidden sm:block cursor-pointer hover:text-blue-500" href="#">MEN</a>
                  <a className="hidden sm:block cursor-pointer hover:text-blue-500" href="#">WOMEN</a>
                  {/* Search */}
            <div className="p-1.5 md:p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <Search size={20} />
            
              </div>
            {/* Cart */}
            <div className="relative p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
                </span>
                </div>
            {/* User */}
            <div className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
              <User size={20} />
               </div>
               </div>
      </div>
    </nav>
  );
}
