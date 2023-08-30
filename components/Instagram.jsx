import igImg1 from '../public/ig-img-1.jpeg';
import igImg2 from '../public/ig-img-2.jpeg';
import igImg3 from '../public/ig-img-3.jpeg';
import igImg4 from '../public/ig-img-4.jpeg';
import igImg5 from '../public/ig-img-5.jpeg';
import igImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './InstagramImg';


const Instagram = () => {

  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'> Follow me on Instagram</p> 
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={igImg1}/>
            <InstagramImg socialImg={igImg2}/>
            <InstagramImg socialImg={igImg3}/>
            <InstagramImg socialImg={igImg4}/>
            <InstagramImg socialImg={igImg5}/>
            <InstagramImg socialImg={igImg6}/>
        </div>

    </div>
  )
}
export default Instagram