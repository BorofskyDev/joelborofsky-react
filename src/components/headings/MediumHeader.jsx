import styles from '../../styles/components/headings/MediumHeader.module.scss'

function MediumHeader({children}) {
  const headingClasses = `${styles.mediumHeader} ${className || ''}`

  return (
    <h3  >{children}</h3>
  )
}
export default MediumHeader