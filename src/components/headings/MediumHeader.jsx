import styles from '../../styles/components/headings/MediumHeader.module.scss'

function MediumHeader({ children, className }) {
  const headingClasses = `${styles.mediumHeader} ${className || ''}`

  return <h3 className={headingClasses}>{children}</h3>
}
export default MediumHeader
