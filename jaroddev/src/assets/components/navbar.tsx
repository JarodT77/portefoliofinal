import { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center p-4 md:mx-40">
            <div>
                <h1 className="text-gradient font-helvetica font-bold text-2xl">JarodDev &lt;/&gt;</h1>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
                <ul className="flex gap-4">
                    <li className="text-gradient font-poppins text-xl"><a href="/">Home</a></li>
                    <li className="text-gradient font-poppins text-xl"><a href="/portefolio">Portefolio</a></li>
                    <li className="text-gradient font-poppins text-xl"><a href="/contact">Contact</a></li>
                </ul>
            </div>

            {/* Burger button mobile */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile menu dropdown */}
            {open && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 z-50 py-4">
                    <ul className="flex flex-col items-center gap-6">
                        <li className="text-gradient font-poppins text-xl"><a href="/" onClick={() => setOpen(false)}>Home</a></li>
                        <li className="text-gradient font-poppins text-xl"><a href="/portefolio" onClick={() => setOpen(false)}>Portefolio</a></li>
                        <li className="text-gradient font-poppins text-xl"><a href="/contact" onClick={() => setOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
