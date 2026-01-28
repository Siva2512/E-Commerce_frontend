import { Search, ShoppingBag, User, Diamond } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#e6e6e3] border-b fixed top-0 left-0 z-50 backdrop-blur-md bg-[#e6e6e3]/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT MENU */}
        <div className="hidden md:flex gap-8 ">
          <a className="text-xs uppercase font-sansfont-semibold hover:text-blue-500" href="#">NEW ARRIVALS</a>
          <a className="text-xs uppercase  font-sans font-semibold hover:text-blue-500" href="# ">COLLECTIONS</a>
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-2 font-serif text-3xl font-bold">
          <Diamond className="text-blue-600" size={28} />
          LUXE
        </div>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
          <a className="cursor-pointer  hover:text-blue-500" href="#">MEN</a>
          <a className="cursor-pointer  hover:text-blue-500" href="#">WOMEN</a>

          <Search className="cursor-pointer hover:text-black" size={20} />

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          <User className="cursor-pointer hover:text-black" size={20} />
        </div>

      </div>
    </nav>
  );
}
