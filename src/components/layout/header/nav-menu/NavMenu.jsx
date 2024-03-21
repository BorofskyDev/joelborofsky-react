import MenuLink from '../../../links/menu-link/MenuLink'
import styles from './NavMenu.module.scss'

export default function NavMenu() {
    return (
      <ul className={styles.navMenu}>
        <MenuLink href='#home' data-text='Home' content='Home' />
        <MenuLink href='#about' data-text='About' content='About' />
        <MenuLink href='#skills' data-text='Skills' content='Skills' />
        <MenuLink href='#projects' data-text='Projects' content='Projects' />
        <MenuLink href='#contact' data-text='Contact' content='Contact' />
      </ul>
    )
}