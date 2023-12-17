import styles from '../../../styles/layout/containers/MediumContainer.module.scss'

function MediumContainer({ children }) {
  const containerClasses = `${styles.largeContainer} ${className || ''}`

  return (
    <div className={style.mediumContainer}>{children}</div>
  )
}
export default MediumContainer
