import Image from "next/image"
import eventPic from "../../public/Sept+16.png"

export default function Events() {
    return (
        <>
            <div className="events w-4/5 justify-center h-auto mx-auto">
                <div className="para text-center text-5xl font-bold text-gray-800 py-10">
                    <p>Upcoming Events</p>
                </div>

                <div className="mb-6">
                    <p className="text-center text-3xl text-gray-700 pb-2">Check back soon for our next event.</p>
                    <p className="text-center text-3xl text-gray-700">Don’t want to wait? <span className='text-red-600'>Get on our mailing list by clicking here!</span> </p>
                </div>

                <div>
                    <Image src={eventPic} alt="event picture" className="w-4/5 mx-auto" />
                </div>

                <div className="flex justify-center mt-10">
                    <button className="text-red-600 hover:drop-shadow-md font-semibold text-lg hover:text-red-700 hover:font-bold">Look for past events &darr;</button>
                </div>
            </div>
        </>
    )
}