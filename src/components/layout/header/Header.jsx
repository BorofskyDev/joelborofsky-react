import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Banner from './Banner'
import MobileMenuToggle from '../../buttons/MobileMenuToggle'
import styles from '../../../styles/layout/Header.module.scss'
import MobileNavMenu from './MobileNavMenu'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className={styles.header}>
      <Banner />
      <MobileMenuToggle
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial='closed' animate='open' exit='closed'>
            <MobileNavMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
export default Header
