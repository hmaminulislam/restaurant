import HeroDefault from '../share/hero-default/HeroDefault'
import AboutCompany from './about-company/AboutCompany'
import DownloadApp from './download-app/DownloadApp'
import OurProcess from './our-process/OurProcess'
import OurTeam from './our-team/OurTeam'

export default function About() {
  return (
    <div>
      <HeroDefault heading={'About'} />
      <AboutCompany />
      <OurProcess />
      <OurTeam />
      <DownloadApp />
    </div>
  )
}
