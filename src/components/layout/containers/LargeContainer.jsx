import styles from '../../../styles/layout/containers/LargeContainer.module.scss'

function LargeContainer({children}) {
  return (
    <div className={styles.largeContainer}>{children}</div>
  )
}
export default LargeContainer