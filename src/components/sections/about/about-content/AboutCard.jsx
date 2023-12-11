

import styles from '../../../../styles/components/sections/about/AboutCard.module.scss'


function AboutCard({ className, iconComponent, children }) {
const sectionClasses = `${styles.aboutCard} ${className || ''}`

  return <div className={sectionClasses} >
    {iconComponent}
    {children}
  </div>
}
export default AboutCard
