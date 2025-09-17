import ContactForm from "@/components/contactform/contactform";
import LocationMap from "@/components/map/map";
import React from "react";

export default function ContactUs(){
    return(
        <div className="container mx-auto">
                        <h2 className="flex font-bold justify-center text-3xl mt-30">Contact Us</h2>
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
        </div>
    )
}