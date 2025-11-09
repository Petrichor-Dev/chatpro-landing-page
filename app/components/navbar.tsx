"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#1D42AB] to-[#1D42AB] text-white text-center py-2 px-4 text-sm font-medium">
        📢 ChatPro – Chat Langsung Beres! • Coba Trial Gratis 7 Hari
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1D42AB] to-[#9BEAEF] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">CP</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-[#1D42AB]">Chat</span>
                  <span className="text-[#9BEAEF]">Pro</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#produk"
                className="text-[#1D42AB] font-medium hover:opacity-80 transition-opacity"
              >
                Produk
              </a>
              <a
                href="#fitur"
                className="text-gray-700 hover:text-[#1D42AB] transition-colors"
              >
                Fitur
              </a>
              <a
                href="#demo"
                className="text-gray-700 hover:text-[#1D42AB] transition-colors"
              >
                Demo
              </a>
              <a
                href="#harga"
                className="text-gray-700 hover:text-[#1D42AB] transition-colors"
              >
                Harga
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-[#1D42AB] transition-colors"
              >
                FAQ
              </a>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-gray-700 font-medium hover:text-[#1D42AB] transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-[#1D42AB] to-[#0F2E7A] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
                Coba Gratis 7 Hari
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#1D42AB] transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="#produk"
                  className="text-[#1D42AB] font-medium hover:opacity-80 transition-opacity"
                >
                  Produk
                </a>
                <a
                  href="#fitur"
                  className="text-gray-700 hover:text-[#1D42AB] transition-colors"
                >
                  Fitur
                </a>
                <a
                  href="#demo"
                  className="text-gray-700 hover:text-[#1D42AB] transition-colors"
                >
                  Demo
                </a>
                <a
                  href="#harga"
                  className="text-gray-700 hover:text-[#1D42AB] transition-colors"
                >
                  Harga
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-[#1D42AB] transition-colors"
                >
                  FAQ
                </a>
                <div className="flex flex-col gap-2 pt-2">
                  <button className="text-gray-700 font-medium hover:text-[#1D42AB] transition-colors text-left">
                    Login
                  </button>
                  <button className="bg-gradient-to-r from-[#1D42AB] to-[#0F2E7A] text-white px-6 py-2 rounded-full font-medium w-full hover:shadow-lg transition-all">
                    Coba Gratis 7 Hari
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* Top Bar */}
//       <div className="bg-[#1D42AB] text-white text-center text-sm py-2 font-medium">
//         📢 ChatPro – Chat Langsung Beres! • Coba Trial Gratis 7 Hari
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white border-b border-gray-100 shadow-sm">
//         <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-[#1D42AB] to-[#9BEAEF] rounded-md flex items-center justify-center">
//               <span className="text-white text-xs font-bold">CP</span>
//             </div>
//             <span className="text-[20px] font-extrabold">
//               <span className="text-[#1D42AB]">Chat</span>
//               <span className="text-[#9BEAEF]">Pro</span>
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {["Produk", "Fitur", "Demo", "Harga", "FAQ"].map((item, i) => (
//               <a
//                 key={i}
//                 href={`#${item.toLowerCase()}`}
//                 className={`font-medium transition-colors ${
//                   item === "Produk"
//                     ? "text-[#1D42AB]"
//                     : "text-gray-700 hover:text-[#1D42AB]"
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Desktop Right Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="text-gray-700 font-medium hover:text-[#1D42AB] transition-colors">
//               Login
//             </button>
//             <button className="bg-[#1D42AB] hover:bg-[#16368c] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm">
//               Coba Gratis 7 Hari
//             </button>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden flex items-center justify-center text-[#1D42AB] hover:text-[#0F2E7A] p-2 rounded-md focus:outline-none transition-all"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         <div
//           className={`md:hidden bg-white border-t border-gray-100 shadow-md transition-all duration-200 overflow-hidden ${
//             isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col gap-4 p-4">
//             {["Produk", "Fitur", "Demo", "Harga", "FAQ"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`font-medium text-base ${
//                   item === "Produk"
//                     ? "text-[#1D42AB]"
//                     : "text-gray-700 hover:text-[#1D42AB]"
//                 } transition-colors`}
//               >
//                 {item}
//               </a>
//             ))}

//             <hr className="border-gray-200" />

//             <button className="text-gray-700 font-medium hover:text-[#1D42AB] text-left">
//               Login
//             </button>
//             <button className="bg-[#1D42AB] hover:bg-[#16368c] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 w-full">
//               Coba Gratis 7 Hari
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
