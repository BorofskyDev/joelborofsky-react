import styles from '../../styles/components/icons/SmallIcon.module.scss'

function SmallIcon({ children, className }) {
  const containerClasses = `${styles.smallIcon} ${className || ''}`

  return (
    <div className={containerClasses} aria-hidden>
        {children}
    </div>
  )
}
export default SmallIcon
