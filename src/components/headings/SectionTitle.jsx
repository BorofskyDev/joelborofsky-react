import styles from '../../styles/components/headings/SectionTitle.module.scss'

function SectionTitle({ children, className }) {
  const containerClasses = `${styles.sectionTitle} ${className || ''}`

  return <h2 className={containerClasses}>{children}</h2>
}
export default SectionTitle
