import AboutCard from './AboutCard'
import styles from '../../../../styles/components/sections/about/About.module.scss'
import { ReactComponent as DeveloperIcon } from '../../../../assets/icons/about/developer.svg'
import { ReactComponent as DesignerIcon } from '../../../../assets/icons/about/designer.svg'
import { ReactComponent as BusinessIcon } from '../../../../assets/icons/about/banker.svg'

function AboutSummary() {
  return (
    <div className={styles.aboutSummary}>
      <div>
        <AboutCard className='bg1' iconComponent={<DeveloperIcon />}>
          <h4>Developer</h4>
          <p>Full Stack Web Developer with a passion for learning and creating.</p>
        </AboutCard>
      </div>
    </div>
  )
}
export default AboutSummary
