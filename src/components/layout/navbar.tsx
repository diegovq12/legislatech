'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Enum para las rutas
enum Routes {
    HOME = '/',
    CHATBOT = '/chatbot',
    RECURSOS = '/recursos',
    FORO = '/foro'
}

// Interface para los items del menú
interface MenuItem {
    name: string;
    path: Routes;
}

// Array de items del menú
const menuItems: MenuItem[] = [
    { name: 'Inicio', path: Routes.HOME },
    { name: 'Chatbot', path: Routes.CHATBOT },
    { name: 'Recursos', path: Routes.RECURSOS },
    { name: 'Foro', path: Routes.FORO }
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleNavigation = (path: Routes) => {
        setIsMobileMenuOpen(false)
        router.push(path)
    }

    // Funcion para verificar si la ruta esta activa
    const isActiveRoute = (path: string): boolean => {
        if (path === Routes.HOME) {
            return pathname === path
        }
        return pathname?.startsWith(path) || false
    }

    return (
        <nav className="sticky top-0 bg-pink-600 border-gray-200 z-50 rounded-b-md">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-blue-200">
                        Portal Asistencia a Violencia Política de Género
                    </span>


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
                    className={`absolute top-16 left-0 w-full border border-pink-600 rounded-b-xl bg-pink-600 md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out z-50 ${
                        isMobileMenuOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
                    } md:opacity-100 md:scale-100 md:translate-y-0 md:pointer-events-auto rounded-lg`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-pink-700 md:bg-transparent rounded-lg">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    className={`block w-full text-left py-2 px-3 rounded-sm 
                                        ${isActiveRoute(item.path)
                                            ? 'text-blue-200 font-semibold'
                                            : 'text-white'
                                        } hover:bg-pink-700 md:hover:bg-transparent md:hover:text-blue-200 md:p-0 rounded-lg`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}