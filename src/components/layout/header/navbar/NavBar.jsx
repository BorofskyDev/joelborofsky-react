import NavMenu from '../nav-menu/NavMenu'
import styles from './NavBar.module.scss'

function NavBar({ isSticky, navbarRef }) {
  return (
    <nav
      className={`${styles.navBar} ${isSticky ? styles.stickyNav : ''}`}
      ref={navbarRef}
    >
     <NavMenu />
    </nav>
  )
}
export default NavBar
