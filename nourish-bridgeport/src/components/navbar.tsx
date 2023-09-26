import Image from "next/image"
import logo from "../../public/logo.png"

export default function NavBar() {
    return (
        <nav className="bg-white shadow-lg w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-auto justify-around">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button --> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
                        Icon when menu is closed.

                        Menu open: "hidden", Menu closed: "block"
          --> */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* <!--
                        Icon when menu is open.

                        Menu open: "block", Menu closed: "hidden"
          --> */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <Image className="h-32 sm:h-24 w-auto m-2" src={logo} alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-600 hover:text-gray-700" --> */}
                            <a href="#" className="inline-flex items-center  underline decoration-2 decoration-red-600 hover:underline hover:decoration-2  hover:decoration-green-600 hover:text-gray-700 px-1 pt-1  font-medium text-gray-900">Home</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">About Us</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">Programs</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">Donate</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">Volunteer</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">Events</a>
                            <a href="#" className="inline-flex items-center  px-1 pt-1  font-medium text-gray-500 hover:underline hover:decoration-2 hover:decoration-green-600 hover:text-gray-700">Contact Us</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 pb-4 pt-2">
                    {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
                    <a href="#" className="block border-l-4 border-green-600 bg-green-50 py-2 pl-3 pr-4 text-base font-medium text-green-700">Home</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">About Us</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">Programs</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">Donate</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">Volunteer</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">Events</a>
                    <a href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-600 hover:bg-gray-50 hover:text-gray-700">Contact us</a>
                </div>
            </div>
        </nav>
    )


}