import Signature from '../../../assets/our-story/signature-1.png';
import AboutImg1 from '../../../assets/our-story/about-1.png';
import AboutImg2 from '../../../assets/our-story/about-2.png';
import ShapImg from '../../../assets/our-story/shape-2.png';
import VictorImg from '../../../assets/our-story/vector-1.png';
import Slide from 'react-reveal/Slide';
import '../../home/our-story/our-story.css'

function OurStory() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
        <div className='lg:flex items-center justify-between gap-12'>
            {/* Our story left start */}
            <div className='lg:w-1/2 max-w-[600px] text-center lg:text-left md:mx-auto lg:mx-0'>
                <h4 className="caveat-font text-3xl text-primary">Our Story</h4>
                <h2 className="sm:text-5xl text-4xl font-semibold my-4">Traditional & Modern Service <span className='text-primary'>Since 2004</span> </h2>
                <p className='font-[300] my-10'>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.</p>
                <img className='mb-10 mx-auto lg:mx-0' src={Signature} alt="" />
                <button className='btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full'>Our Story</button>
            </div>
            {/* Our story left end  */}

            {/* Our story right start */}
            <div className='lg:w-1/2 max-w-[600px] mx-auto lg:mx-0 relative mt-20 lg:mt-0'>
                <div className='bg-rounder-men'></div> 
                <Slide bottom>
                    <img className='z-10' src={AboutImg1} alt="" />
                </Slide>
                <img className='absolute right-0 top-[-40px] z-[-1]' src={ShapImg} alt="" />
                <img className='top-40 tomato-img' src={AboutImg2} alt="" />
                <img className='victor-img' src={VictorImg} alt="" />
            </div>
            {/* Our story right end */}
        </div>
    </div>
  )
}

export default OurStory