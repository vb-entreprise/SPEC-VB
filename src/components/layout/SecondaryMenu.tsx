import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

export const SecondaryMenu = () => {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      setVisible(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on scroll or resize
  useEffect(() => {
    const closeMenu = () => setMobileOpen(false)
    window.addEventListener("scroll", closeMenu)
    window.addEventListener("resize", closeMenu)
    return () => {
      window.removeEventListener("scroll", closeMenu)
      window.removeEventListener("resize", closeMenu)
    }
  }, [])

  const menuItems = [
    "About",
    "Programs",
    "Academics",
    "Admissions",
    "Campus Life",
    "Placements",
    "Research & Innovation"
  ]

  const extraLinks = [
    "International",
    "Library",
    "Student Services",
    "Career",
    "Blogs",
    "Contact Us"
  ]

  return (
    <nav
      className={`w-full flex justify-center fixed z-30 pointer-events-auto transition-all duration-300 ${
        scrolled ? "top-[60px] bg-[#0b578a] shadow-lg" : "top-[180px]"
      } ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={menuRef}
        className={`cu-container mx-auto flex justify-center items-center transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-2 px-4 bg-[#0b578a]/0 backdrop-blur-[2px] rounded-lg'
        }`}
      >
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 justify-center w-full">
          {menuItems.map((item) => (
            <div className="relative group" key={item}>
              <button className="px-3 py-2 flex items-center gap-1.5 text-white uppercase font-bold text-sm tracking-wide hover:text-[#fbb03b] transition-all duration-300 relative">
                {item}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fbb03b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="flex lg:hidden w-full justify-end items-center">
          <button
            className="text-white p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="7" y2="7" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="17" y2="17" />
            </svg>
          </button>
        </div>
        {/* Mobile Drawer */}
        {mobileOpen && (
          <>
            {/* White Drawer */}
            <div className="fixed top-0 right-0 h-full w-[90vw] max-w-xs bg-white z-50 flex flex-col shadow-2xl animate-slide-in overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Image src="https://ext.same-assets.com/2241434697/282655042.webp" alt="Chandigarh University" width={120} height={40} />
                <button
                  className="text-gray-500 text-3xl p-1 rounded hover:bg-gray-100"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col divide-y divide-gray-200">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-6 py-4 text-black uppercase font-bold text-base tracking-wide flex items-center justify-between bg-transparent hover:bg-gray-100 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                    <span className="text-xl font-light">+</span>
                  </button>
                ))}
              </div>
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="text-xs font-bold text-gray-700 mb-2 tracking-widest">CAMPUSES</div>
                <div className="flex gap-6 items-center">
                  <a href="https://www.cuchd.in/" className="flex flex-col items-center text-xs font-semibold text-gray-700 hover:text-[#c40c12]">
                    <Image src="https://ext.same-assets.com/1087074623/507068166.webp" alt="Punjab Campus" width={40} height={40} />
                    <span className="mt-1">PUNJAB CAMPUS</span>
                  </a>
                  <a href="http://www.culko.in/" className="flex flex-col items-center text-xs font-semibold text-gray-700 hover:text-[#c40c12]">
                    <Image src="https://ext.same-assets.com/1087074623/1463931019.webp" alt="Uttar Pradesh Campus" width={40} height={40} />
                    <span className="mt-1">UTTAR PRADESH CAMPUS</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col divide-y divide-gray-200">
                {extraLinks.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-6 py-4 text-black uppercase font-bold text-base tracking-wide bg-transparent hover:bg-gray-100 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setMobileOpen(false)}
            />
          </>
        )}
      </div>
    </nav>
  )
}

export default SecondaryMenu; 