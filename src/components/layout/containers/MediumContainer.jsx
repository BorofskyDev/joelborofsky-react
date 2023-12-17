import styles from '../../../styles/layout/containers/MediumContainer.module.scss'

function MediumContainer({ children, className }) {
  const containerClasses = `${styles.mediumContainer} ${className || ''}`

  return (
    <div className={containerClasses}>{children}</div>
  )
}
export default MediumContainer
