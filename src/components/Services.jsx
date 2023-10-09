import Service1 from '../images/service1.png'
import Service2 from '../images/service2.png'
import Service3 from '../images/service3.png'

function Services(){
    return(
        <div id="about-overall">
            <div id="heading" className="mt-16">
                <h1 className='text-center text-5xl text-[#9AA473] max-[1039px]:text-4xl max-[841px]:text-5xl max-[350px]:text-4xl'>Our Services</h1>
                <div id="line" className="flex align-center justify-center mt-3">
                    <div className="w-24  border-2 border-b-2 border-[#D86E32]"></div>
                </div>
            </div>
            <div id="about-main" className="mt-16 grid grid-cols-3 gap-24 px-16 max-[1020px]:gap-16 max-[825px]:grid-cols-2 max-[615px]:grid-cols-1 max-[370px]:gap-10 max-[370px]:px-10">
                <div id="about-item-one">
                    <div className='flex align-middle justify-center mt-2'>
                        <img src={Service1} alt="first service" className='w-64 h-52 max-[370px]:w-48 max-[370px]:h-40' />
                    </div>
                    <h4 className='text-center mt-5 text-[#9AA473] text-xl'><strong>Stretches</strong></h4>
                    <p className='text-base text-justify leading-[40px] mt-6 max-[370px]:leading-[35px] max-[370px]:text-sm'>
                        At our studio, we offer a diverse range of yoga classes, 
                        including Hatha, Vinyasa, Ashtanga, Bikram, Yin, and more. 
                        These classes cater to different preferences and levels of experience.
                    </p>
                </div>
                <div id="about-item-two">
                    <div className='flex align-middle justify-center'>
                        <img src={Service2} alt="first service" className='w-64 h-52 max-[370px]:w-48 max-[370px]:h-40' />
                    </div>
                    <h4 className='text-center mt-5 text-[#800096] text-xl'><strong>Meditation</strong></h4>
                    <p className='text-base text-justify leading-[40px] mt-5 max-[370px]:leading-[35px] max-[370px]:text-sm'>
                        Discover the serenity of the mind through our meditation classes. 
                        These sessions are designed to help you cultivate mindfulness, 
                        reduce stress, and enhance mental focus. 
                    </p>
                </div>
                <div id="about-item-three">
                    <div className='flex align-middle justify-center'>
                        <img src={Service3} alt="first service" className='w-64 h-52 max-[370px]:w-48 max-[370px]:h-40' />
                    </div>
                    <h4 className='text-center mt-5 text-[#D86E32] text-xl'><strong>Pranayama</strong></h4>
                    <p className='text-base text-justify leading-[40px] mt-5 max-[370px]:leading-[35px] max-[370px]:text-sm'>
                        Explore the power of breath in our pranayama classes. We'll guide 
                        you through various breath control techniques to improve lung capacity 
                        and reduce anxiety.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Services