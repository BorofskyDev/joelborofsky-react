import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStickyNav } from '../../../hooks/useStickyNav'
import Banner from './banner/Banner'
import MobileMenuToggle from '../../buttons/MobileMenuToggle'
import MobileNavMenu from './mobile-nav-menu/MobileNavMenu'
import NavBar from './navbar/NavBar'
import styles from './Header.module.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSticky, navbarRef, bannerRef } = useStickyNav()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className={styles.header}>
      <Banner ref={bannerRef} />
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

      <NavBar isSticky={isSticky} navbarRef={navbarRef} />
    </header>
  )
}
export default Header
