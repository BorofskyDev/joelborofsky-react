import styles from './MenuLink.module.scss'

function MenuLink({ content, ...props }) {
  return (
    <a {...props} className={styles.menuLink}>
      <span>{content}</span>
    </a>
  )
}
export default MenuLink
