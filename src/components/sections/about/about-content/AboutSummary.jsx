import AboutCard from './AboutCard'
import styles from '../../../../styles/components/sections/about/About.module.scss'

function AboutSummary() {
  return (
    <div className={styles.aboutSummary}>
      <AboutCard className='bg1' />
    </div>
  )
}
export default AboutSummary
