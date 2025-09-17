
import React from "react"
import Image from "next/image"
import Carousel from "@/components/carousel/carousel"
import ContactForm from "@/components/contactform/contactform"
import LocationMap from "@/components/map/map"


export default function Home(){
    return(

      
        <><div className="w-full mt-30">

            <div className="container mx-auto h-[70vh] mb-6 mt-8 relative">
                <Image
                    src="/bt.jpg"
                    alt="Church logo"
                    fill
                    priority />
            </div>
            <div className="w-full bg-white px-4 py-8">
                <h1 className="text-4xl font-bold text-center">WELCOME TO ICGC FAITH TEMPLE</h1>
            </div>

            {/* Two side div having text and image */}

            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 gap-8 py-8">
                <div className="md:w-1/2">
                    <p className="text-justify mt-20 font-extrabold text-5xl">
                       Message from Pastor to the general public
                    </p>
                </div>
                {/* <div className="md:w-1/2 h-[700px] relative">
        <Image
        src="/rev.Fiifi.jpg"
        alt="Rev.Fiifi"
        fill
        className="object-cover rounded-lg"
        />
           <p className="text-center text-gray-600 italic">
  Reverend Fiifi - Our Spiritual Leader
</p>
    </div> */}

                <div className="md:w-1/2 relative">
                    <div className="h-[700px] relative">
                        <Image
                            src="/rev.Fiifi.jpg"
                            alt="Reverend Fiifi of Faith Temple"
                            fill
                            className="object-cover rounded-lg" />
                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <p className="text-center text-white italic">
                                Reverend Fiifi - Our Spiritual Leader
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr></hr>
        {/* Services section */}
                    <h2 className="flex justify-center font-bold text-3xl p-5">OUR SERVICES</h2>
                  <div className="container mx-auto px-4 py-12">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                     <div className="bg-white rounded-xl shadow-lg overflow-hidden        transition-transform hover:scale-[1.02]">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                    src="/refreshing.jpeg" 
                                    alt="Card 1" 
                                    className="w-full h-full object-cover transition-transform hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="flex text-2xl font-bold mb-3 text-blue-500 justify-center">MONDAYS - FRIDAYS</h4>
                                <h3 className="flex text-2xl font-bold mb-3 justify-center">MOMENT OF REFRESHING</h3>
                                    <p className="flex mb-4 justify-center">
                                    7AM - 5:30AM
                                    </p>
                                </div>
                        </div>

                       {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden        transition-transform hover:scale-[1.02]">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                    src="/wednesday.jpeg" 
                                    alt="Card 1" 
                                    className="w-full h-full object-cover transition-transform hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="flex text-2xl font-bold mb-3 text-blue-500 justify-center">WEDNESDAYS</h4>
                                <h3 className="flex text-2xl font-bold mb-3 justify-center">RHYMA SERVICE</h3>
                                    <p className="flex mb-4 justify-center">
                                    7PM - 8PM
                                    </p>
                                </div>
                        </div>

                        {/* Card 3 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                                    <div className="h-64 overflow-hidden">
                                        <img 
                                        src="/friday.jpeg" 
                                        alt="Card 2" 
                                        className="w-full h-full object-cover transition-transform hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h4 className="flex text-2xl font-bold mb-3 text-blue-500 justify-center">FRIDAYS</h4>
                                        <h3 className="flex text-2xl font-bold mb-3 justify-center">PRAYER SERVICE</h3>
                                        <p className="flex mb-4 justify-center">
                                        7PM - 8PM
                                        </p>
                                    </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                        <div className="h-64 overflow-hidden">
                            <img 
                            src="/Church-Banner.jpg" 
                            alt="Card 3" 
                            className="w-full h-full object-cover transition-transform hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="flex text-2xl font-bold mb-3 text-blue-500 justify-center">SUNDAYS</h4>
                            <p className="flex justify-center mb-4">
                            First Service: 7:00 - 9:30 AM
                            </p>
                            <p className="flex justify-center mb-4">
                            Second Service: 7:00 - 9:30 AM
                            </p>
                        </div>
                        </div>
        </div>
</div>

                        {/* Love for society */}

                  <div>
                      <h2 className="flex justify-center text-2xl font-extrabold">LOVE FOR SOCIETY</h2>

                    <p className="flex justify-center text-justify px-40 p-5">
                        Faith Temple is committed to the well-being for the society both spritually and physically. As part of our work, offer assistance to Ga-West Municipal Hospital and other NGO's.
                    </p>
                    <section>
                        <Carousel/>
                    </section>
                  </div>


                   <div className="flex flex-col md:flex-row w-full gap-10 px-8 py-4 ">
                    <div className="md:w-1/2">
                        <p className="flex font-black text-green-700 text-3xl justify-center py-6">OUR MISSION</p>
                        <p className="text-justify">
                            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <p className="flex font-black text-green-700 text-3xl justify-center py-6">OUR VISION</p>
                        <p className="text-justify">
                            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
                        </p>
                    </div>
            </div>

            


                        {/* Contact Us section */}
                        <h2 className="flex font-bold justify-center text-3xl">Contact Us</h2>
            <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-1/2">
                    <section>
                        <LocationMap />
                    </section>
                </div>

                <div className="md:w-1/2">
                    <section>
                        <ContactForm />
                    </section>
                </div>

            </div>

        {/* End */}
           
            
            
            
            
            
            </>


    )
}