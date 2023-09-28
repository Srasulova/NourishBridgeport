import Image from "next/image";
import veggies from "../../public/veggies.jpeg"

export default function AboutUs() {
    return (<>
        <div className="about-us-div w-screen justify-center h-auto py-10">
            <div className="para text-center text-5xl font-bold text-gray-800 py-10">
                <p>We are nOURish BRIDGEPORT</p>
            </div>

            <div className="info flex w-4/5 h-auto justify-around items-center mx-auto">
                <div className="para-2 mx-10 flex-1 text-gray-600 text-xl font-medium leading-10 text-center ">
                    <p>nOURish BRIDGEPORT (capitalization intentional) is a food-centered, volunteer-powered, community-anchored 501c3 bringing hope to our City through direct service programs. Bridgeport is defined as a Food Desert, with 1 in 4 residents facing daily food insecurity & inaccessibility to nutritious produce. nOURish provides thousands of neighbors weekly with Groceries from our Food Pantry, Formula & Diapers from our Baby Center, Hot Meals from our Soup Kitchen, Education from our English Classes, & Hope from our Hearts.</p>
                </div>
                <div className="img flex-1">
                    <Image src={veggies} alt="vegetables" />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button className="text-red-600 hover:drop-shadow-md font-semibold text-lg hover:text-red-700 hover:font-bold">More about us &darr;</button>
            </div>

        </div>
    </>)
}