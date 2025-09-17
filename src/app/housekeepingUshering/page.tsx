import React from "react"
import Image from "next/image"
import ChildrenImageSlider from "@/components/childrenimageslider/imageslider"

export default function HousekeepingUshering(){
    return(
        <div className=" container mx-auto flex flex-col relative">
            
                     <div className="flex flex-col w-full mt-30 h-[60vh] relative">
                                <Image 
                                src="/h/usher.jpg"
                                alt="banner"
                                fill
                                
                        />
                    </div>
                    {/* <div className="w-20 h-[20vh]">
                        <Image 
                    src="/rev.Fiifi.jpg"
                    alt="Rev.Fiifi"
                    fill
                    
                    />
                    </div> */}
        
                    <div className="flex flex-col md:flex-row w-full gap-5">
                        <div className="md:w-[80%]">
                            <div className="flex flex-col space-y-5 text-justify">
                     
                                    <p className="font-bold mt-7">
                                            Raising Leaders
                                                    Shaping Vision
                                                    Influencing Society through Christ
                                                    Through our programs, we trust to make the lives of our people better than before they came to Church, and redirect their perception and behaviour in conformity with God's word. This attitude which is based on the word of God will transform the lives of people in their communities, work place, schools etc.
                        
                                        </p>
        
                                        <p>
                                                    Raising Leaders
                                                    Shaping Vision
                                                    Influencing Society through Christ
                                                    Through our programs, we trust to make the lives of our people better than before they came to Church, and redirect their perception and behaviour in conformity with God's word. This attitude which is based on the word of God will transform the lives of people in their communities, work place, schools etc.
                                        </p>
                                </div>
                        </div>
        
                        <div className="w-[30%]">
                            <ChildrenImageSlider />
                            <h1>Thank you</h1>
                        </div>
                    </div>
         
                    
                {/* <div className=" flex flex-col mt-7 ">
        
                
                   
                                <div className="flex flex-col space-y-5 text-justify">
                     
                                    <p className="font-bold">
                                            Raising Leaders
                                                    Shaping Vision
                                                    Influencing Society through Christ
                                                    Through our programs, we trust to make the lives of our people better than before they came to Church, and redirect their perception and behaviour in conformity with God's word. This attitude which is based on the word of God will transform the lives of people in their communities, work place, schools etc.
                        
                                        </p>
        
                                        <p>
                                                    Raising Leaders
                                                    Shaping Vision
                                                    Influencing Society through Christ
                                                    Through our programs, we trust to make the lives of our people better than before they came to Church, and redirect their perception and behaviour in conformity with God's word. This attitude which is based on the word of God will transform the lives of people in their communities, work place, schools etc.
                                        </p>
                                </div>
                </div> */}
        </div>
    )
}