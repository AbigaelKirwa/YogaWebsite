import './MainContent.css';
import MainImg from '../images/desktop-view.png'

function MainContent(){
  return(
    <div id='main-overall' className='flex flex-row justify-between'>
        <div id="words" className='mt-20 ml-10 w-2/3'>
            <h1 className='text-center text-5xl text-[#D86E32]'>Tranquil Yoga Studio</h1>
            <p className='mt-10  text-justify text-[#0C2D29] font-medium leading-[50px] px-5'>
                Discover a world of inner peace and physical well-being 
                through the transformative practice of yoga. Our studio 
                is a sanctuary where you can escape the stresses of everyday life.
            </p>
            <div className='mx-20 mt-12'>
                <button className='w-full h-16  rounded-full text-xl text-white bg-gradient-to-r from-[#D7763F] to-[#D86E32]'>Learn More</button>
            </div>
        </div>
        <div id="main-pic" className='mt-[-40px] ml-32'>
            <img src={MainImg} alt="website main image"  className='w-[80%]'/>
        </div>
    </div>
  )
}

export default MainContent