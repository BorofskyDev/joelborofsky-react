import MenuLink from '../../links/MenuLink'
import styles from '../../../styles/layout/NavBar.module.scss'

function NavBar() {
  return (
    <nav className={styles.navBar}>
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
    </nav>
  )
}
export default NavBar