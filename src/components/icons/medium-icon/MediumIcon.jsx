import styles from './MediumIcon.module.scss'

function MediumIcon({ children, className }) {
  const containerClasses = `${styles.mediumIcon} ${className || ''}`

  return (
    <div className={containerClasses} aria-hidden >
      {children}
    </div>
  )
}
export default MediumIcon
