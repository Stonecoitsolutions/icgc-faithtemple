
import Link from "next/link"
import { FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Navbar(){
    return(
        <nav className="container mx-auto flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 bg-white shadow">
            <div className="flex flex-col items-center">
                <img src="/icgc-logo.jpg" alt="Logo" className="w-8 h-8" />
                <span className="blink text-lg font-black">ICGC</span>
                <span className="text-xl font-black">Faith Temple </span>
            </div>
           <ul className="relative flex space-x-6 font-medium">
                    <li><Link href="/">Home</Link></li>
                    
                            {/* Dropdown Item with Tailwind CSS Caret */}
                                <li className="relative group">
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <Link href="/">About</Link>
                                        <span
                                        className="
                                            w-0 h-0 
                                            border-l-[4px] border-l-transparent
                                            border-r-[4px] border-r-transparent
                                            border-t-[4px] border-t-current
                                            transition-transform duration-300
                                            group-hover:rotate-180
                                        "
                                        ></span>
                                    </div>

                                    {/* Dropdown */}
                                    <div
                                        className="
                                        absolute left-0
                                        invisible opacity-0
                                        group-hover:visible group-hover:opacity-100
                                        bg-white shadow-lg
                                        min-w-[200px] mt-2 pt-2
                                        rounded-md z-50
                                        divide-y divide-gray-100
                                        transition-all duration-300
                                        "
                                    >
                                        <ul>
                                        <li className="px-4 py-2 hover:bg-green-300">
                                            <Link href="/faithtemple">Faith Temple</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-50">
                                            <Link href="/icgcworld">ICGC Worldwide</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-50">
                                            <Link href="/ministries">Ministries</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-50">
                                            <Link href="/Event">Departments</Link>
                                        </li>
                                        </ul>
                                    </div>
                                    </li>


                        <li className="relative group">
                                <div className="flex items-center gap-1 cursor-pointer">
                                <Link href="/About">Media</Link>
                                {/* Custom caret using border trick */}
                                <span className="
                                     w-0 h-0 
                                            border-l-[4px] border-l-transparent
                                            border-r-[4px] border-r-transparent
                                            border-t-[4px] border-t-current
                                            transition-transform duration-300
                                            group-hover:rotate-180
                                ">
                                    
                                </span>
                                </div>
                                
                                {/* Dropdown Content */}
                                <ul className="
                                  absolute left-0
                                        invisible opacity-0
                                        group-hover:visible group-hover:opacity-100
                                        bg-white shadow-lg
                                        min-w-[200px] mt-2 pt-2
                                        rounded-md z-50
                                        divide-y divide-gray-100
                                        transition-all duration-300
                                ">
                                <li className="px-4 py-2 hover:bg-green-300">
                                    <Link href="/sermon">Sermon</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-50">
                                    <Link href="/Ministries">Gallery</Link>
                                </li>
                                
                                </ul>
                     </li>
    
                        <li><Link href="/contactus">Contact</Link></li>
                        <li><Link href="/Event">Event</Link></li>
                        <li><Link href="/Give">Give</Link></li>
            </ul>

            <div className="flex space-x-3">
                <a href="https://youtube.com" target="_blenn" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 spacex-2">
                <FaYoutube />
                <span>Live</span>
                </a>
                <a href="https://facebook.com" target="_blank" className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-800 space-x-2"> 
                <FaFacebookF />
                <span>Live</span>
                </a>
            </div>
        </nav>
    )
}