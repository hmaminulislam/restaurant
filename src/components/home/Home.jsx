import Hero from './Hero'
import MoreAbout from '../home/more-about/MoreAbout'
import OurMenu from './our-menu/OurMenu'
import OurService from './our-service/OurService'

export default function Home() {
  return (
    <div>
      <Hero />
      <MoreAbout/>
      <OurMenu />
      <OurService/>
    </div>
  )
}
