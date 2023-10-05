import React from "react";
import greenBG from "../../../public/greenBG.png";
import Image from "next/image";


export default function AboutUs() {

    return (
        <div className="main w-screen h-auto">
            <div
                className="header flex h-72 w-screen items-center justify-center z-10"
                style={{
                    backgroundImage: `url(${greenBG.src})`, // Access the image source using .src
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="heading text-center text-6xl font-bold text-white tracking-wide">
                    A Little About Us
                </h1>
            </div>
            <div className="content w-4/5 h-auto mx-auto my-20">
                <div className=" flex gap-6">
                    <div className="para flex-1 text-gray-600 text-md font-medium leading-8">nOURish BRIDGEPORT (capitalization intentional) is a food-centered, volunteer-powered, community-anchored 501c3 bringing hope to our City through direct service programs. Bridgeport is defined as a Food Desert, with 1 in 4 residents facing daily food insecurity & inaccessibility to nutritious produce. nOURish provides thousands of neighbors weekly with Groceries from our Food Pantry, Formula & Diapers from our Baby Center, Hot Meals from our Soup Kitchen, Education from our English Classes, & Hope from our Hearts.
                        <p className="para text-gray-600 text-md font-medium leading-8 mt-6">
                            Established in 2009 and Incorporated in 2010, our mission is to bring hope to our city through direct service programs. We have ten (10) programs focusing on education, food, and health.  We strive to mitigate the effects of food scarcity and food insecurity. Each program was designed to answer a need in our city. Read more on our “Programs” tab.
                        </p></div>
                    <div className="video flex-1">
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/u_NjjX1TKLY?si=q-iQuad0OSw5gYvf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className=" mt-10">
                    <p className="para text-gray-600 text-md font-medium leading-8">nOURish BRIDGEPORT, Inc. is also known for building partnerships across Bridgeport, Fairfield County, and Connecticut. We view these  collaborative efforts as ways to connect folks with means with folks with needs, and to give groups and families of all stripes opportunities to serve others. We seek to follow the philosophy that we all need to work together for the common good. We welcome over 2,500 volunteers each year.</p>
                    <p className="para text-gray-600 text-md font-medium leading-8">In 2020, nOURish was honored as the “Non-Profit Partner of the Year” by the Center for Family Justice.  Our President/CEO and Founder, Reverend Sara D. Smith, Esq. – on behalf of nOURish, was awarded the 2020 “American Dream” Award from the Connecticut Institute for Refugees and Immigrants for our work with refugees.  She has also received the “Good Scout” Award from the Regional Boy Scouts of America, and the “Women’s Leadership” Award from Al-Aziz Islamic Center.</p>
                </div>
            </div>

            <div className='pb-4 w-4/5 border-b-2 border-red-500 mx-auto mb-10 flex justify-center'>

                <button className=" pb-10">
                    <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group shadow-md">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Join our Mailing List</span>
                    </a>
                </button>


            </div>

            <div className="team w-4/5 mx-auto">
                <div className="para pb-10">
                    <p className="tracking-wide text-center text-5xl font-bold text-gray-800">Our Team</p>
                    <p className="text-center text-2xl font-medium text-gray-700 my-10">Volunteer Leadership</p>
                    <p className="text-gray-600 text-center my-10">nOURish BRIDGEPORT, Inc. is fortunate to be governed by a volunteer board comprised of major community leaders, with our primary leadership provided by:</p>
                    <p className=" text-xl mx-auto w-max text-gray-700">
                        <span className="text-red-400 font-medium">John F. Stafstrom, Jr. ,</span>  Finance and Development Committee Chair <br />
                        <span className="text-red-400 font-medium">Clare Stafstrom,</span> Board Chair <br />
                        <span className="text-red-400 font-medium">Ben Branyan,</span> Board Vice-Chair <br />
                        <span className="text-red-400 font-medium">George P. Carter,</span> Founding Board Member <br />
                        <span className="text-red-400 font-medium">Kirsten Nestro,</span> Secretary <br />
                        <span className="text-red-400 font-medium">Jessica Layman,</span> Treasurer <br />
                    </p>
                    <p className="text-gray-600 text-left my-10">All our programs are also volunteer-powered, with approximately 2,500 adults and youth volunteering throughout the year at our various program sites. Several organizations have taken the official step of becoming “mission/mitzvah” partners, committing financial and human resources to help us serve our neighbors in need in Bridgeport. </p>
                    <p className="tracking-wide text-center text-5xl font-bold text-gray-800 my-10">Staff Leadership</p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                            <div className="flex-shrink-0">
                                <Image className="h-10 w-10 rounded-full" src="https://unsplash.com/photos/AJIqZDAUD7A" alt="something" width={20} height={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">Leslie Alexander</p>
                                    <p className="truncate text-sm text-gray-500">Co-Founder / CEO</p>
                                </a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </div>
    );
}
