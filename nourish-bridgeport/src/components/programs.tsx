import Image from "next/image"
import foodPantry from "../../public/foodPantry.jpg"
import hotMeals from "../../public/Picture12.png"
import indoorFarm from "../../public/indoorfarm.jpeg"
import thanksgiving from "../../public/thanksgiving.jpeg"
import urbanCamp from "../../public/urban camp.jpg"
import englishClasses from "../../public/4+x+6+booth+esl.png"

export default function OurPrograms() {
    return (<>
        <div className=" programs-div w-4/5 justify-center h-auto mx-auto mb-10 bg-stone-100 p-6 rounded">
            <div className="para text-center text-5xl font-bold text-gray-800 py-10 tracking-wide">
                <p>Our Programs</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mx-auto w-4/5 pt-5 pb-12">
                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={foodPantry} alt="food pantry" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">Super Food Pantry and Baby Center</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">Every single week in Bridgeport, CT, we distribute groceries and baby items to our neighbors in need at no cost.</p>
                </div>
                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={hotMeals} alt="hot meals" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">FEEL THE WARMTH Hot Meal</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">This supper program serves 9,000+ meals that feature healthy proteins and fresh vegetables each year.</p>
                </div>
                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={indoorFarm} alt="indoor farm" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">nOURish INDOOR FARM</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">At Connecticut’s FIRST NON PROFIT Indoor Hydroponic Farm, nOURish BRIDGEPORT Inc. is growing produce and distributing it to our neighbors in need. </p>
                </div>

                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={thanksgiving} alt="thanksgiving" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">Thanksgiving FEAST IN A BOX</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">Our “Feast in a Box” program offers a complete ready-to-cook Thanksgiving dinner to 350 needy families (2,500 meals) each year.</p>
                </div>
                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={urbanCamp} alt="urban work" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">Urban Work Camp</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">Our “Urban Immersion Experience” program provides suburban youth education on the complex issues of urban poverty and food insecurity.</p>
                </div>
                <div className="card rounded  border border-gray-200 w-96 bg-white hover:shadow-xl hover:brightness-110">
                    <Image src={englishClasses} alt="english classes" className="rounded-t h-60" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-700 m-4">English as a Second Language</h3>
                    <p className=" font-normal leading-6 text-gray-500 m-4">ESL: Building a community where our newest neighbors can learn English, adapt to American culture and embrace their new life.</p>
                </div>
            </div>

            <div className="flex justify-center my-10 btn-div">
                <button className="">
                    <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group shadow-md">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">More about our programs</span>
                    </a>
                </button>
            </div>


        </div>
    </>)
}