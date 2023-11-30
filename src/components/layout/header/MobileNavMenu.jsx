import { motion } from 'framer-motion'
import MenuLink from '../../links/MenuLink'
import styles from '../../../styles/layout/MobileNavMenu.module.scss'

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




function MobileNavMenu() {
  return (
    <motion.nav className={styles.mobileMenu} variants={menuVariants}>
      <ul>
        <MenuLink href='#about' data-text='About'>
          <span>About</span>
        </MenuLink>
        <MenuLink href='#skills' data-text='Skills'>
          <span>Skills</span>
        </MenuLink>
        <MenuLink href='#projects' data-text='Projects'>
          <span>Projects</span>
        </MenuLink>
        <MenuLink href='#contact' data-text='Contact'>
          <span>Contact</span>
        </MenuLink>
      </ul>
    </motion.nav>
  )
}
export default MobileNavMenu
