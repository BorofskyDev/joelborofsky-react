import styles from './ProjectIconImg.module.scss'

export default function ProjectIconImg({
  icon,
  iconFill,
  viewBox,
  xmlns,
  className,
}) {
  const iconClasses = `${styles.projectIconImg} ${className || ''}`

  return (
    <svg viewBox={viewBox} xmlns={xmlns} className={iconClasses}>
      <path d={icon} className={iconFill} />
    </svg>
  )
}
