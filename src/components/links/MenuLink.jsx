import styles from '../../styles/components/links/MenuLink.module.scss'

function MenuLink({children, ...props}) {
  return (
    <a {...props} className={styles.menuLink}>{children}</a>
  )
}
export default MenuLink