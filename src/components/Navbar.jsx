import Logo from '../images/logo.png';
import { useState } from 'react';

function Navbar(){
  const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <div>
    <div id='desktop-view' className='flex flex-row justify-between max-[841px]:hidden'>
      <div id="navbar">
        {/* this is the menu that is displayed in full screen */}
        <ul className="ml-10 mt-10 flex flex-row gap-20">
          <li className="w-32 text-xl text-center font-semibold h-12 pt-1.5 text-white bg-gradient-to-r from-[#800096] to-[#C772E4] rounded-full"><div className="home-btn">Home</div></li>
          <li className="mt-2 text-xl font-semibold text-[#733D64]">About</li>
          <li className="mt-2 text-xl font-semibold text-[#733D64]">Services</li>
          <li className="mt-2 text-xl font-semibold text-[#733D64]">Contact</li>
        </ul>
      </div>
      <div id='logo' className='mr-16 mt-7'>
        <img src={Logo} alt='website-logo' className='w-16'></img>
      </div>
    </div>
    
    {/* mobile view */}
    <div className="flex flex-row-reverse items-center justify-between px-10 py-4 min-[841px]:hidden max-[410px]:px-5">
      <a href="/">
        <img src={Logo} alt='website-logo' className='w-12'></img>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block rounded-full h-1 w-8 animate-pulse bg-[#733D64]"></span>
            <span className="block rounded-full h-1 w-8 animate-pulse bg-[#733D64]"></span>
            <span className="block rounded-full h-1 w-8 animate-pulse bg-[#733D64]"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 ml-[-80%] px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <div className="h-8 w-8 ml-3 text-[#733D64] inline-block align-middle">
                  <span className="h-8 w-0.5 bg-[#733D64] absolute transform -rotate-45 translate-x-2"></span>
                  <span className="h-8 w-0.5 bg-[#733D64] absolute transform rotate-45 translate-x-2"></span>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-between mt-[-30%] max-[485px]:mt-[-55%] max-[310px]:mt-[-80%]">
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                About
              </li>
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                Services
              </li>
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                Contact
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </div>
  )
}

export default Navbar