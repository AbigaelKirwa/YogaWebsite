import About1 from '../images/about2.png'
import About2 from '../images/about.png'

function About(){
    return(
        <div id="about_overall">
            <div id="heading" className="mt-16">
                <h1 className='text-center text-5xl text-[#9AA473] max-[1039px]:text-4xl max-[841px]:text-5xl max-[350px]:text-4xl'>About Us</h1>
                <div id="line" className="flex align-center justify-center mt-3">
                    <div className="w-24  border-2 border-b-2 border-[#D86E32]"></div>
                </div>
            </div>
            <div id="content_main" className='pt-10'>
                <div id="content_one" className='flex flex-row px-14 max-[936px]:flex-col max-[936px]:px-5 max-[936px]:justify-center max-[936px]:items-center'>
                    <div className='flex align-middle justify-center w-3/4 max-[980px]:mt-10 max-[936px]:w-full max-[936px]:justify-center'>
                        <img src={About1} alt='lady floating' className='w-[70%]'/>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-justify px-3 pt-16 leading-[50px] max-[1180px]:pt-5'>
                            At Tranquil Yoga Studio, we are more than just a yoga studio; 
                            we are a sanctuary for holistic well-being, a nurturing 
                            space where individuals come together to cultivate harmony 
                            of mind, body, and spirit. Established with a deep-rooted 
                            commitment to the practice and philosophy of yoga, our studio 
                            is a haven for seekers of inner peace, strength, and vitality.       
                        </p>
                    </div>
                </div>
                <div id="content_two" className='flex flex-row-reverse px-14 max-[936px]:flex-col max-[936px]:px-5 max-[936px]:justify-center max-[936px]:items-center'>
                    <div className='flex align-middle justify-center w-3/4 pl-40 max-[1080px]:mt-20 max-[980px]:mt-30 max-[936px]:pl-0'>
                        <img src={About2} alt='lady floating' className='w-[70%] max-[1080px]:w-[80%]'/>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-justify px-3 pt-16 leading-[50px]'>
                            Our highly skilled and passionate instructors bring a wealth of 
                            knowledge and expertise, guiding practitioners of all levels on 
                            their unique yoga journeys. From gentle, restorative practices 
                            to dynamic, energizing flows, we offer a wide array of classes 
                            to cater to every individual's needs and preferences. Beyond yoga, 
                            we believe in fostering a sense of community.       
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About