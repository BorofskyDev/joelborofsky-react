import styles from '../../styles/components/buttons/MobileMenuToggle.module.scss'

function MobileMenuToggle({ isMenuOpen, handleMenuToggle }) {
  const menuToggleClass = isMenuOpen
    ? `${styles.menuToggle} ${styles.opened}`
    : `${styles.menuToggle}`

  return (
    <button
      className={styles.menuToggle}
      onClick={handleMenuToggle}
      aria-label='Navigation Menu'
      tabIndex={1}
    >
      <span className={menuToggleClass}></span>
      <span className={menuToggleClass}></span>
      <span className={menuToggleClass}></span>
    </button>
  )
}
export default MobileMenuToggle
