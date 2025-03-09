'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="sticky top-0 bg-pink-600 border-gray-200 z-50">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-blue-200">
                        Nombre de la página
                    </span>
                </Link>

                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                <div
                    id="mobile-menu"
                    className={`absolute top-16 left-0 w-full bg-pink-600 md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out z-50 ${
                        isMobileMenuOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
                    } md:opacity-100 md:scale-100 md:translate-y-0 md:pointer-events-auto`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-pink-700 md:bg-transparent">
                        {["Inicio", "Chatbot", "Recursos", "Contacto"].map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="block py-2 px-3 text-white rounded-sm hover:bg-pink-700 md:hover:bg-transparent md:hover:text-blue-200 md:p-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}