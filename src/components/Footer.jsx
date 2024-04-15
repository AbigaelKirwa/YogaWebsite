import React from 'react'
import FooterImage from "../images/footer.png"

const Footer = () => {
  return (
    <footer class="mt-24 px-10 py-10 bg-[#F0DFCE] flex max-[980px]:flex-col">
        <div class="w-4/5 grid grid-cols-3 gap-10 max-[980px]:flex max-[980px]:justify-center max-[980px]:items-center max-md:w-full max-sm:grid max-sm:grid-cols-1 max-sm:gap-10">
          <div class="max-sm:text-center text-[#2B2B2B] flex flex-col gap-3">
            <h2 class="font-bold text-lg">Our Conacts</h2>
            <p class="font-normal mt-7">tranquilyoga123@gmail.com</p>
            <p class="font-normal mt-3">P.O.BOX 1234-5678</p>
            <p class="font-normal mt-3">Nairobi, Kenya</p>
          </div>

          <div class="ml-16 max-sm:ml-0 max-sm:text-center text-[#2B2B2B] flex flex-col gap-3">
            <h2 class="font-bold text-lg">Links</h2>
            <p class="font-normal mt-7"><a href="#home">home</a></p>
            <p class="font-normal mt-3"><a href="#about">about</a></p>
            <p class="font-normal mt-3"><a href="#contact">contact us</a></p>
          </div>

          <div class="ml-16 max-sm:ml-0 max-sm:text-center text-[#2B2B2B] flex flex-col gap-3">
            <h2 class="font-bold text-lg">Updates</h2>
            <p class="font-normal mt-7">Launches</p>
            <p class="font-normal mt-3">Schedules</p>
            <p class="font-normal mt-3">Announcements</p>
          </div>
        </div>
        <div className='flex-grow flex align-middle justify-center max-[980px]:hidden'>
            <img src={FooterImage} alt="last" className='w-1/2 max-[980px]:w-[250px] max-[980px]:pt-14' />
        </div>
      </footer>
  )
}

export default Footer