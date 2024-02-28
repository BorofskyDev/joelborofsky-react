import { motion } from 'framer-motion'
import styles from './LargeIconImg.module.scss'

export default function LargeIconImg({ icon, viewBox, className }) {
  const iconClasses = `${styles.largeIconImg} ${className || ''}`

  return (
    <svg viewBox={viewBox} className={iconClasses}>
      <motion.path d={icon} />
    </svg>
  )
}
