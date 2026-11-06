
import { useState } from 'react'

function Sidebar({ onSelectedTab }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleTab = (tab) => {
        onSelectedTab(tab)
        setIsOpen(false)
    }

    return (
        <>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-[60] bg-black text-white p-3 rounded-lg shadow-lg"
            >
                {isOpen ? '✕' : '☰'}
            </button>


            <aside className="hidden md:hidden lg:block group fixed left-0 top-0 z-50 h-screen w-20 hover:w-52 bg-black hover:bg-black/80 backdrop-blur-xl  transition-all duration-300">

                <div className="flex flex-col items-center pt-20 gap-8 blur group-hover:blur-none">

                    <p
                        onClick={() => handleTab('Home')}
                        className="cursor-pointer text-white font-bold hover:text-gray-400 transition-all duration-200 whitespace-nowrap"
                    >
                        HOME
                    </p>

                    <p
                        onClick={() => handleTab('Manage')}
                        className="cursor-pointer text-white font-bold hover:text-gray-400 transition-all duration-200 whitespace-nowrap"
                    >
                        MANAGE
                    </p>

                </div>
            </aside>


            <aside
                className={` fixed top-0 left-0 z-50 h-screen w-64 bg-black/95 backdrop-blur-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >

                <div className="flex flex-col items-start pt-24 px-8 gap-8">

                    <p
                        onClick={() => handleTab('Home')}
                        className="cursor-pointer text-white font-bold text-lg hover:text-gray-400 transition"
                    >
                        HOME
                    </p>

                    <p
                        onClick={() => handleTab('Manage')}
                        className="cursor-pointer text-white font-bold text-lg hover:text-gray-400 transition"
                    >
                        MANAGE
                    </p>

                </div>
            </aside>


            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="md:hidden fixed inset-0 z-40 bg-black/50"
                />
            )}
        </>
    )
}

export default Sidebar
