import Image from "next/image";
import greenBG from "../../../public/greenBG.png"


export default function AboutUs() {
    return (<>
        <div className="main w-screen h-screen">
            <div className="header flex flex-col h-1/6 w-screen">
                <h1 className="heading text-center text-5xl font-bold text-white tracking-wide py-28 bg-green-600 z-10 ">A Little About Us</h1>
                {/* <Image src={greenBG} alt="background" className="fit-content" /> */}
            </div>


            <div className="w-4/5 h-auto mx-auto"></div>
        </div>
    </>)
}