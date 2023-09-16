import './Navbar.css';
import Logo from '../images/logo.png';

function Navbar(){

  return(
    <div>
    <div id='desktop-view' className='flex flex-row justify-between'>
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
    </div>
  )
}

export default Navbar