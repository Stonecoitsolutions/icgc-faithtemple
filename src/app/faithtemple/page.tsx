import Image from "next/image"
import React from "react"

export default function Faithtemple(){
    return(
        <div className="bg-gray-190 mt-20">
                <div>
                        {/* <div className=" relative w-full h-[60vh] p-5">
                            <Image
                                            src="/Church-Banner.jpg"
                                            alt="Church logo"
                                            fill
                                            className="oblect-cover"
                                            priority />
                        
                        </div> */}

                        
                        
                </div>

                    {/* About Us */}
                <div  className="flex flex-col md:flex-row w-full gap-10 p-10">
                    <div className="md:w-1/2 mt-10">
                        <img src="/Church-banner.jpg" />
                    </div>

                    <div className="md:w-1/2">
                    <h2 className="flex justify-center font-extrabold text-2xl">About Us</h2>
                 
                            <p className="text-justify">
                                What is now the International Central Gospel Church (ICGC) Faith Temple started somewhere in 1992, after the General Overseer, Dr. Mensa Otabil gave the instructions to lay/covenant family leaders of the church to proceed on the Rural Outreach Projects. Among the chosen districts was the Ga West and the first group of leaders who were given this jurisdiction included Kwame Boateng, Fiifi, Wilson, Eric Mensah, Cosmos Dikroh, Twenego, Osei Bonsu and a few ladies. Calvin Agbotse and I later came to join the group.
                            </p>

                            <p className="text-justify mt-4">
                                , there were times we could come to church and somebody would have planted ‘juju’ (black magic) in our place of worship, and we could literally see it. We would dig it out and burn it. 

                                We faced other challenges, however, we continued to meet in that house until we managed to secure a classroom in the Anglican School. We (the leaders) were young and very energetic. Ofankor was not developed in those days. It started right at the junction and that was where we had our church activities and all other outreach programmes and crusades. All these programmes and activities were designed mainly for the townsfolk.

                            </p>
                            
                   
                    </div>

                  


                </div>
  {/* text 2 */}
                <div className="text-justify container mx-auto">
                    <p>
                        Due to our size, other leaders like Fiifi Wilson, Julius, Ben and Mantey left to set up the Asofan church and where they met in a school. Later, Kwasi Sampong was made the Head Pastor of the Ofankor Church and I became his Assistant.  

                        We were known as the Ofankor Rural Church and our number was not huge compared to the other assemblies but later, we became established and known for our prophetic and deliverance ministries. In 1998, I also left to establish the Achimota Branch.

                        Out of Ofankor, churches like Taifa, Asofan and Ashongman were established. When I left, Pastor Fiifi moved the church to its current location. He had received training from Central Bible School and was made the substantive pastor. 

                    </p>
                </div>

                                {/* Mission Statement */}
                                <h2 className="flex justify-center font-extrabold  text-2xl p-5">OUR MISSION STATEMENT</h2>
                        <div className="flex flex-col md:flex-row gap-3 items-center px-15">
                                {/* Column One */}
                                <div className="relative w-full md:w-1/3 flex flex-col items-center group">
                                    {/* Image with custom dimensions */}
                                    <div className="relative w-[30px] h-[30px]">
                                        <Image
                                            src="/globe.svg"
                                            alt="logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    
                                    {/* Static text below image */}
                                    <p className="mt-2">Raising Leaders</p>
                                    
                                    {/* Hover text - now scoped to individual item */}
                                    <div className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm max-w-[90%] text-center">
                                            ICGC is committed to provide the opportunity, facility and the tools for the release, development and sharpening of the gift, talents, skills and abilities of members and provide directions.
                                            {/* Pointer triangle */}
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column Two */}
                                <div className="relative w-full md:w-1/3 flex flex-col items-center group">
                                    {/* Image with custom dimensions */}
                                    <div className="relative w-[30px] h-[30px]">
                                        <Image
                                            src="/globe.svg"
                                            alt="logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    
                                    {/* Static text below image */}
                                    <p className="mt-2">Shaping Vision</p>
                                    
                                    {/* Hover text */}
                                    <div className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm max-w-[90%] text-center">
                                            It is the desire of the church to provide 'eyes' to our generation in every sphere of life: Spiritual, social, political, and economic. We are therefore confident that, individuals with personal commitment to Christ will have the capacity to bring direction to our world.
                                            {/* Pointer triangle */}
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column Three */}
                                <div className="relative w-full md:w-1/3 flex flex-col items-center group">
                                    {/* Image with custom dimensions */}
                                    <div className="relative w-[30px] h-[30px]">
                                        <Image
                                            src="/globe.svg"
                                            alt="logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    
                                    {/* Static text below image */}
                                    <p className="mt-2">Influencing Society</p>
                                    
                                    {/* Hover text */}
                                    <div className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm max-w-[90%] text-center">
                                            It is our purpose and desire to constantly influence our the world through our lives and conduct. As salt of the world, we are committed to the preservation of Godliness. As light of the world, we transform the society through the influence of a Christ-Centered life.
                                            {/* Pointer triangle */}
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                     
                    {/* <div className="">
                        <Image 
                        src="/img1.png"
                        alt="image"
                        fill
                        className="object-contain"                        

                        />
                    </div> */}

                    <img className="w-full h-[20vh] mt-4 "   src="img1.png" alt="image2"  />
                                   

                        {/* Our philosophy section */}
            <div className="flex flex-col md:flex-row w-full"> 
                <div className="md:flex-1">

                </div>

                <div className="md:flex-3">
                    <h2 className="flex font-extrabold justify-center text-2xl p-5">OUR OHILOSOPHY</h2>
                    <p className="text-justify">
                        blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
                    </p>
                    <div className="flex flex-col justify-center">
                        <p>
                        <span className="mr-3">#</span>
                         Holiness
                    </p>

                    <p>
                        <span className="mr-3"> #</span>
                          Practical Christianity
                    </p>

                    <p>
                        <span className="mr-3">#</span>
                        Excellence
                    </p>
                    </div>
                </div>

                <div className="md:flex-1">

                </div>

            </div>


      </div>
    )
}