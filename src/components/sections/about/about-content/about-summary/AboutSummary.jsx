import AboutCard from '../about-card/AboutCard'
import styles from './AboutSummary.module.scss'
import { ReactComponent as DeveloperIcon } from '../../../../../assets/icons/about/developer.svg'
import { ReactComponent as DesignerIcon } from '../../../../../assets/icons/about/designer.svg'
import { ReactComponent as BusinessIcon } from '../../../../../assets/icons/about/banker.svg'
import MediumHeader from '../../../../headings/medium-header/MediumHeader'
import SmallIcon from '../../../../icons/small-icon/SmallIcon'

function AboutSummary() {
  return (
    <div className={styles.aboutSummary}>
      <AboutCard className='bg-yellow'>
        <SmallIcon className='icon1 bg-green fillVibrant4'>
          <DeveloperIcon />
        </SmallIcon>
        <MediumHeader className='bg-violet'>Developer</MediumHeader>
        <p>
          A frontend stack that includes HTML, CSS, JavaScript, and React
          (Nextjs), coupled with a backend stack that includes Node.js,
          Express.js, and MongoDB.
        </p>
      </AboutCard>
      <AboutCard className='bg-blue'>
        <SmallIcon className='icon1 bg-yellow fillVibrant3'>
          <DesignerIcon />
        </SmallIcon>
        <MediumHeader className='bg-pink'>Designer</MediumHeader>
        <p>
          I can handle development in the design stages with Figma, to
          implementing complex web designs via SCSS/SASS, Framer Motion,
          Threejs, TailwindCSS, and more, all with an accessibility-first
          approach.
        </p>
      </AboutCard>
      <AboutCard className='bg-green'>
        <SmallIcon className='icon1 bg-blue fillVibrant2'>
          <BusinessIcon />
        </SmallIcon>
        <MediumHeader className='bg-yellow'>
          Business<span className='font-handwriting'>(er)</span>
        </MediumHeader>
        <p>
          Outside of development I have years of experience in sales, service,
          marketing, and financial services. At one point I was even a licensed
          banker and have experience in working with investors.
        </p>
      </AboutCard>
    </div>
  )
}
export default AboutSummary
