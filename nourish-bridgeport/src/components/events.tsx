import Image from "next/image"
import eventPic from "../../public/Sept+16.png"
import logo1 from "../../public/CIRI-biline-lo.png"
import logo2 from "../../public/Op+Care.jpg"
import logo3 from "../../public/Council+of+Churches.jpg"
import logo4 from "../../public/cfj-logo-main.png"
import logo5 from "../../public/farmers+market.jpg"
import logo6 from "../../public/ucc_logo.png"
import logo7 from "../../public/ymca logo.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Events() {
    return (
        <>
            <div className="events w-4/5 justify-center h-auto mx-auto my-10">
                <div className="para text-center text-5xl font-bold text-gray-800 py-10">
                    <p className="tracking-wide">Upcoming Events</p>
                </div>

                <div className="mb-6">
                    <p className="text-center text-3xl text-gray-700 pb-2">Check back soon for our next event.</p>
                    <p className="text-center text-3xl text-gray-700">Don’t want to wait? <span className='text-red-600 font-semibold'>Get on our mailing list by clicking here!</span> </p>
                </div>

                <div className="my-14">
                    <Image src={eventPic} alt="event picture" className="w-4/5 mx-auto" />
                </div>

                <div className="bnt-div flex justify-center mt-20">
                    <button className="">
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group shadow-md">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">More about past events</span>
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}