import { motion } from 'framer-motion'
import styles from './MobileNavMenu.module.scss'
import NavMenu from '../nav-menu/NavMenu'

const menuVariants = {
  open: {
    x: 0,
    transition: {
      x: { type: 'easeInOut', stiffness: 1000, damping: 10 },
      opacity: { duration: 0.2 },
    },
  },
  closed: {
    x: 500,
    transition: {
      x: { type: 'backInOut', stiffness: 1000, damping: 20 },
      opacity: { duration: 0.3 },
    },
  },
}

export default function MobileNavMenu() {
  return (
    <motion.nav className={styles.mobileMenu} variants={menuVariants}>
      <NavMenu />
    </motion.nav>
  )
}
