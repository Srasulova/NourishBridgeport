import Image from "next/image";
import veggies from "../../public/veggies.jpeg"

export default function AboutUs() {
    return (<>
        <div className="about-us-div w-screen justify-center h-auto py-10">
            <div className="para text-center text-5xl font-bold text-gray-800 py-10">
                <p className="tracking-wide">We are nOURish BRIDGEPORT</p>
            </div>

            <div className="info flex w-4/5 h-auto justify-around items-center mx-auto">
                <div className="para-2 mx-10 flex-1 text-gray-600 text-xl font-medium leading-10 text-center ">
                    <p>nOURish BRIDGEPORT (capitalization intentional) is a food-centered, volunteer-powered, community-anchored 501c3 bringing hope to our City through direct service programs. Bridgeport is defined as a Food Desert, with 1 in 4 residents facing daily food insecurity & inaccessibility to nutritious produce. nOURish provides thousands of neighbors weekly with Groceries from our Food Pantry, Formula & Diapers from our Baby Center, Hot Meals from our Soup Kitchen, Education from our English Classes, & Hope from our Hearts.</p>
                </div>
                <div className="img flex-1">
                    <Image src={veggies} alt="vegetables" />
                </div>
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
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">More about us</span>
                    </a>
                </button>
            </div>


        </div>
    </>)
}