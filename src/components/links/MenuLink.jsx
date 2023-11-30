import styles from '../../styles/components/links/MenuLink.module.scss'

function MenuLink({children}) {
  return (
    <a href="#" className={styles.menuLink}>{children}</a>
  )
}
export default MenuLink