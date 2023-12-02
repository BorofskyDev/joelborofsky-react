import styles from '../../styles/components/headings/XLHeading.module.scss'

function XLHeading({children}) {
  return (
    <h1 className={styles.xlHeading}>{children}</h1>
  )
}
export default XLHeading