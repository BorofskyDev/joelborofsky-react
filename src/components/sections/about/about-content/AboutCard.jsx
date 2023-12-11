import SmallIcon from '../../../icons/SmallIcon'

import styles from '../../../../styles/components/sections/about/About.module.scss'

function AboutCard({ className, iconComponent }) {
const sectionClasses = `${styles.aboutCard} ${className || ''}`

  return <div className={sectionClasses} >
    {iconComponent }
    {/* Small Header */}
    {/* Content */}
  </div>
}
export default AboutCard
