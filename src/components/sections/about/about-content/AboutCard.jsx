

import styles from '../../../../styles/components/sections/about/AboutCard.module.scss'


function AboutCard({ className,  children }) {
const sectionClasses = `${styles.aboutCard} ${className || ''}`

  return <div className={sectionClasses} >
   
    {children}
  </div>
}
export default AboutCard
