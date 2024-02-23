import styles from './SectionTitle.module.scss'

function SectionTitle({ children, className }) {
  const containerClasses = `${styles.sectionTitle} ${className || ''}`

  return <h2 className={containerClasses}><span>{children}</span></h2>
}
export default SectionTitle
