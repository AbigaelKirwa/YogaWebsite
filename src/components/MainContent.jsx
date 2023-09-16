import './MainContent.css';
import MainImg from '../images/desktop-view.png'

function MainContent(){
  return(
    <div id='main-overall' className='flex flex-row justify-between max-[841px]:flex-col-reverse'>
        <div id="words" className='mt-20 ml-10 w-2/3 max-[1039px]:w-full max-[841px]:ml-0 max-[841px]:px-10 max-[841px]:mt-10'>
            <h1 className='text-center text-5xl text-[#D86E32] max-[1039px]:text-4xl max-[841px]:text-5xl max-[490px]:text-3xl max-[346px]:leading-[50px]'>Tranquil Yoga Studio</h1>
            <p className='mt-10 mr-5  text-justify text-[#0C2D29] font-medium leading-[50px] px-5 max-[346px]:leading-[40px]'>
                Discover a world of inner peace and physical well-being 
                through the transformative practice of yoga. Our studio 
                is a sanctuary where you can escape the stresses of everyday life.
            </p>
            <div className='mx-20 mt-12 max-[490px]:mx-10 max-[377px]:mx-5'>
                <button className='w-full h-16 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-[#D7763F] to-[#D86E32]'>Learn More</button>
            </div>
        </div>
        <div id="main-pic" className='mt-[-80px] flex justify-center max-[1130px]:mt-[-65px] max-[1076px]:mt-[-30px] max-[1039px]:mt-[10px] max-[975px]:mt-[40px] max-[841px]:ml-0 max-[841px]:mt-0'>
            <img src={MainImg} alt="website main"  className='w-[80%] max-[841px]:w-[50%] max-[500px]:w-[70%]'/>
        </div>
    </div>
  )
}

export default MainContent