import styles from '../../../../styles/components/sections/about/About.module.scss'

function AboutCard({ children, className }) {
const wrapperClasses = `${styles.aboutCard} ${className || ''}`

  return <div className={wrapperClasses} >{children}</div>
}
export default AboutCard
