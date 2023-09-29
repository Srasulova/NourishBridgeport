import Image from "next/image"
import charity1 from "../../public/charity-1.jpg"
import logo from "../../public/logo.png"


export default function HeroArea() {
    return (
        <>
            <div className="hero-area-div h-full w-screen flex items-center justify-center bg-green-600">
                <div className="para flex-1 flex flex-col items-center justify-center text-white font-bold">
                    <p className="text-center text-lg mb-6 ">N<span className="text-2xl">OUR</span>ISH <span className="text-2xl">BRIDGEPORT</span>.inc</p>
                    <div className="w-44 h-44 rounded-full bg-white flex items-start justify-center">
                        <Image className="w-32 h-32 pt-7 pl-2" src={logo} alt="logo" />
                    </div>
                    <p className="text-7xl text-center py-2 leading-14 tracking-wider">Moving the needle on <br /> Food Insecurity</p>

                </div>
                <div className="img flex-1">
                    <Image src={charity1} alt="charity photo" className="h-auto w-auto" />
                </div>
            </div>
        </>
    )
}