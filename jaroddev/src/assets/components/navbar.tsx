import { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    return (
        <nav className="flex justify-between items-center p-4 md:mx-40">
            <div>
                <h1 className="text-gradient font-helvetica font-bold text-2xl">JarodDev &lt;/&gt;</h1>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
                <ul className="flex gap-4">
                    <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('home')}>Home</li>
                    <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('about')}>À propos</li>
                    <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('projects')}>Portefolio</li>
                    <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('contact')}>Contact</li>
                </ul>
            </div>

            {/* Burger button mobile */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 active:scale-90 transition-all duration-200"
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
                        <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('home')}>Home</li>
                        <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('about')}>À propos</li>
                        <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('projects')}>Portefolio</li>
                        <li className="text-gradient font-poppins text-xl cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200" onClick={() => scrollTo('contact')}>Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
