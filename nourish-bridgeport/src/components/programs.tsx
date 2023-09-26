import Image from "next/image"
import diapers from "../../public/diapers.jpg"
import hotMeals from "../../public/Picture12.png"
import indoorFarm from "../../public/indoorfarm.jpg"
import thanksgiving from "../../public/thanksgiving.jpeg"
import urbanCamp from "../../public/urban camp.jpg"

export default function OurPrograms() {
    return (<>
        <div className=" programs-div w-screen justify-center h-auto mb-10">
            <div className="para text-center text-5xl font-bold text-gray-800 py-10">
                <p>Our Programs</p>
            </div>

            <div className="flex flex-wrap w-4/5 h-auto mx-auto">
                <div className="w-1/2 h-1/6 bg-blue-500">
                    <p>Super Food Pantry & Baby Center</p>
                </div>
                <div className="w-1/2 h-1/6 bg-red-500">
                    <Image className="h-auto w-3/5" src={diapers} alt="diapers" />
                </div>
                <div className="w-1/2 h-1/6 bg-green-500 ">
                    <Image className="" src={hotMeals} alt="hot meals" />
                </div>
                <div className="w-1/2 h-1/6 bg-yellow-500 ">FEEL THE WARMTH Hot Meal</div>
                <div className="w-1/2 h-1/6 bg-pink-500 ">Indoor Hydroponic Farm</div>
                <div className="w-1/2 h-1/6 bg-purple-500 ">
                    <Image className="h-auto w-3/5" src={indoorFarm} alt="indoor farm" />
                </div>
                <div className="w-1/2 h-1/6 bg-green-500 ">
                    <Image className="h-auto w-4/5" src={thanksgiving} alt="thanksgiving" />
                </div>
                <div className="w-1/2 h-1/6 bg-yellow-500 ">Thanksgiving Feast in a Box</div>
                <div className="w-1/2 h-1/6 bg-pink-500 ">IUrban Work Camp</div>
                <div className="w-1/2 h-1/6 bg-purple-500 ">
                    <Image className="h-auto w-3/5" src={urbanCamp} alt="urban camp" />
                </div>

            </div>
        </div>
    </>)
}