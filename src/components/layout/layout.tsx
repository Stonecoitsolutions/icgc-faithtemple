'use client'
import React from "react";
import Navbar from "../navbar/navbar";
import Faithtemple from "@/app/faithtemple/page";


export default function SubLayout({children}: ({children: React.ReactNode})){
    return(
        <div>
            {/* <Navbar/>
            <Faithtemple/> */}

             {children}
        </div>

       
    );
}