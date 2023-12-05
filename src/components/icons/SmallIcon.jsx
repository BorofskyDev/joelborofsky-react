import styles from '../../styles/components/icons/SmallIcon.module.scss'

function SmallIcon({ src, className }) {
  const containerClasses = `${styles.smallIcon} ${className || ''}`

  return <img src={src} alt={null} className={containerClasses} aria-hidden />
}
export default SmallIcon
