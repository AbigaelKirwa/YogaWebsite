  import React from 'react'
  import ContactImage from '../images/contact.png'

  const Contact = () => {
    return (
      <div id='contact-overall'>
        <div id="heading" className="mt-16">
          <h1 className='text-center text-5xl text-[#9AA473] max-[1039px]:text-4xl max-[841px]:text-5xl max-[350px]:text-4xl'>Contact Us</h1>
          <div id="line" className="flex align-center justify-center mt-3">
              <div className="w-24  border-2 border-b-2 border-[#D86E32]"></div>
          </div>
        </div>
        <div className='px-2 pt-14 grid grid-cols-2 align-middle justify-center max-[936px]:grid-cols-1'>
          <div className='flex align-middle justify-center max-[936px]:hidden'>
            <img src={ContactImage} alt="boy yoga" className='w-2/3 h-5/6 mt-10 max-[936px]:hidden' />
          </div>
          <div className='flex align-middle justify-center'>
            <form className='flex flex-col bg-[#9AA473] w-3/4 h-[500px] px-10 pt-10 pb-5 gap-10 rounded-lg align-middle justify-center max-[936px]:w-3/4'>
              <input placeholder='Name' className='px-5 py-3 rounded-lg'/>
              <input placeholder='Email' className='px-5 py-3 rounded-lg'/>
              <input placeholder='Message' className='px-5 pt-3 py-8 pb-20 rounded-lg'/>
              <div className='flex align-middle justify-center'>
                <button className='bg-[#784438] w-2/3 text-white rounded-full py-3 font-bold shadow-xl text-lg'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default Contact