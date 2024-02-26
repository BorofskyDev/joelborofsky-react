import { icons } from '../../../../icons/icons'
import AboutCard from '../about-card/AboutCard'
import MediumHeader from '../../../../headings/medium-header/MediumHeader'
import SmallIcon from '../../../../icons/small-icon/SmallIcon'
import styles from './AboutSummary.module.scss'

function AboutSummary() {
  return (
    <div className={styles.aboutSummary}>
      <AboutCard className='bg-orange'>
        <SmallIcon
          icon={icons.developer.path}
          viewBox={icons.developer.viewBox}
          xmlns={icons.developer.xmlns}
          position='left'
          iconFill='fill-green'
          className='bg-dark'
        />
        <MediumHeader className='bg-violet'>Developer</MediumHeader>
        <p>Next.js, React, Node.js, Express.js, MongoDB, and more!</p>
      </AboutCard>
      <AboutCard className='bg-blue'>
        <SmallIcon
          icon={icons.designer.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          position='left'
          iconFill='fill-green'
          className='bg-vibrant-orange'
        />
        <MediumHeader className='bg-pink'>Designer</MediumHeader>
        <p>Figma, SCSS, Framer Motion, and an obsession with accessibility!</p>
      </AboutCard>
      <AboutCard className='bg-green'>
        <SmallIcon
          icon={icons.business.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          position='left'
          iconFill='fill-vibrant-orange'
          className='bg-vibrant-purple'
        />
        <MediumHeader className='bg-yellow'>
          Business<span className='font-handwriting'>(er)</span>
        </MediumHeader>
        <p>Financial Sales, Service, Investor Relations, even Retail!</p>
      </AboutCard>
    </div>
  )
}
export default AboutSummary
