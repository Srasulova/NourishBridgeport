import React from "react";
import greenBG from "../../../public/greenBG.png";


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

            <div className='pb-4 w-4/5 border-b-2 border-red-500 mx-auto mb-10'>
                <p className='text-center text-xl font-semibold text-gray-800'>Join our <span className='text-red-600'> Mailing List</span> </p>
            </div>

            <div className="team w-4/5 mx-auto">
                <div className="para pb-10">
                    <p className="tracking-wide text-center text-5xl font-bold text-gray-800">Our Team</p>
                    <p className="text-center text-2xl font-medium text-gray-700 my-10">Volunteer Leadership</p>
                    <p className="text-gray-600 text-center my-10">nOURish BRIDGEPORT, Inc. is fortunate to be governed by a volunteer board comprised of major community leaders, with our primary leadership provided by:</p>
                    <p className=" text-xl mx-auto w-max font-medium text-gray-600">
                        John F. Stafstrom, Jr., Finance and Development Committee Chair <br />
                        Clare Stafstrom, Board Chair <br />
                        Ben Branyan, Board Vice-Chair <br />
                        George P. Carter, Founding Board Member <br />
                        Kirsten Nestro, Secretary <br />
                        Jessica Layman, Treasurer <br />
                    </p>
                </div>
            </div>
        </div>
    );
}
