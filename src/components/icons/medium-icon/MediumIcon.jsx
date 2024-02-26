import { motion } from 'framer-motion'
import MediumIconImg from './medium-icon-img/MediumIconImg'
import styles from './MediumIcon.module.scss'

export default function MediumIcon({ icon, viewBox, xmlns, className }) {
  const iconClasses = `${styles.mediumIcon} ${className || ''}`

  return (
    <motion.div
      className={iconClasses}
      initial={{ scale: 0 }}
      whileInView={{ rotate: 340, scale: 1 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
    >
      <MediumIconImg icon={icon} viewBox={viewBox} xmlns={xmlns} />
    </motion.div>
  )
}
