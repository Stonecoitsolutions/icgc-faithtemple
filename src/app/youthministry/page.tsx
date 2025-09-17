import React from "react"
import Image from "next/image"
import ChildrenImageSlider from "@/components/childrenimageslider/imageslider"

export default function YouthMinistry(){
    return(
        <div>
            <div className=" container mx-auto flex flex-col relative">
                
                <div className="flex flex-col w-full mt-30 h-[60vh] relative">
                        <Image 
                        src="/h/youth.jpg"
                        alt="banner"
                        fill
                        
                />
            </div>

            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="md:w-[80%]">
                    <div className="flex flex-col space-y-5 text-justify">
                
                            <p className="font-bold mt-7">
                                    nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
                
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
             
                        
            </div>
        </div>
    )
}