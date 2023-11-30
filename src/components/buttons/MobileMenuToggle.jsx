import { motion } from 'framer-motion'
import styles from '../../styles/components/buttons/MobileMenuToggle.module.scss'



const topVariants = {
  closed: { rotate: 0, top: '0.25em', left: '0' },
  opened: { rotate: 45, top: '0.9em', left: '0.5em'},
}

const middleVariants = {
  closed: { opacity: 1, left: '0' },
  opened: { opacity: 0, left: '0.5em' },
}

const bottomVariants = {
  closed: { rotate: 0, top: '1.55em', left: '0' },
  opened: { rotate: -45, top: '0.9em', left: '0.5em' },
}

function MobileMenuToggle({ isMenuOpen, handleMenuToggle }) {


  return (
    <button
      className={styles.menuToggle}
      onClick={handleMenuToggle}
      aria-label='Navigation Menu'
      tabIndex={1}
    >
      <motion.span
        variants={topVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
      <motion.span
        variants={middleVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
      <motion.span
        variants={bottomVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
    </button>
  )
}
export default MobileMenuToggle
