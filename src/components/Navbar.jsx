import './Navbar.css';
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
    <div className="flex flex-row-reverse items-center justify-between px-10 py-4 min-[841px]:hidden">
      <a href="/">
        <img src={Logo} alt='website-logo' className='w-12'></img>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 ml-[-80%] px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between mt-[-70%]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
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