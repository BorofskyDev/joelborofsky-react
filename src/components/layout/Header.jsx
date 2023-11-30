import { useState } from 'react'
import Banner from './Banner'
import MobileMenuToggle from '../buttons/MobileMenuToggle'
import styles from '../../styles/layout/Header.module.scss'

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
    </header>
  )
}
export default Header
