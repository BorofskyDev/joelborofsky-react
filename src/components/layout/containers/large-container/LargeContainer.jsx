import styles from './LargeContainer.module.scss'

function LargeContainer({children, className}) {
  const containerClasses = `${styles.largeContainer} ${className || ''}`

  return (
    <div className={containerClasses}>{children}</div>
  )
}
export default LargeContainer