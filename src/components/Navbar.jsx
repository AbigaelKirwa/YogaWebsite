import Logo from "../images/logo.png"
import { useState } from "react";

function Navbar(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div>
            {/* this is the desktop view of the navigation */}
            <div id="desktop-view" className="flex flex-row justify-between max-[841px]:hidden">
                <div id="navbar">
                    <ul className="ml-10 mt-10 flex flex-row gap-20">
                        <li className="w-32 text-xl text-center font-semibold h-12 bg-gradient-to-r from-[#800096] to-[#C772E4] pt-1.5 text-white rounded-full">Home</li>
                        <li className="mt-2 text-xl font-semibold text-[#733D64]">About</li>
                        <li className="mt-2 text-xl font-semibold text-[#733D64]">Services</li>
                        <li className="mt-2 text-xl font-semibold text-[#733D64]">Contact</li>
                    </ul>
                </div>
                <div id="logo" className="mr-16 mt-7">
                    <img src={Logo} alt="icon" className="w-16" />
                </div>
            </div>
            {/* this is the mobile view of the navigation */}
            <div id="mobile-view" className="min-[841px]:hidden flex flex-row-reverse items-center justify-between px-10 py-4">
                <a href="/">
                    <img src={Logo} alt="icon" className="w-12" />
                </a>
                <nav>
                    <section className="flex">
                        {/* navbar when menu is closed */}
                        <div className="space-y-2" onClick={()=> setIsNavOpen((prev)=>!prev)}>
                            <span className="block h-1 w-8 bg-[#733D64] animate-pulse rounded-full"></span>
                            <span className="block h-1 w-8 bg-[#733D64] animate-pulse rounded-full"></span>
                            <span className="block h-1 w-8 bg-[#733D64] animate-pulse rounded-full"></span>
                        </div>
                        {/* x symbol to close menu */}
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="mt-10 ml-[-80%]" onClick={()=> setIsNavOpen(false)}>
                                <div className="h-8 w-8 text-[#733D64] inline-block align-middle">
                                    <span className="h-8 w-0.5 bg-[#733D64] absolute transform -rotate-45 translate-x-2"></span>
                                    <span className="h-8 w-0.5 bg-[#733D64] absolute transform rotate-45 translate-x-2"></span>
                                </div>
                            </div>
                            <ul className="mt-[10%] flex flex-col items-center gap-20">
                                <li className="border-b border-gray-400 uppercase cursor-pointer" onClick={()=>setIsNavOpen(false)}>About</li>
                                <li className="border-b border-gray-400 uppercase cursor-pointer" onClick={()=>setIsNavOpen(false)}>Services</li>
                                <li className="border-b border-gray-400 uppercase cursor-pointer" onClick={()=>setIsNavOpen(false)}>Contact</li>
                            </ul>
                        </div>

                    </section>
                </nav>
                <style>
                    {`
                        .hideMenuNav{
                            display: none;
                        }

                        .showMenuNav{
                            display:block;
                            position:absolute;
                            width:100%;
                            height:auto;
                            padding-bottom:40%;
                            top:0;
                            left:0;
                            background:white;
                            z-index:10;
                            display:flex;
                            flex-direction:column;
                            justify-content:space-evenly;
                            align-items:center;
                        }
                        
                    `}
                </style>
            </div>

        </div>
        
    )
}

export default Navbar;