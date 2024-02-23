import styles from './MainHeading.module.scss'

function MainHeading({children}) {
  return (
    <h1 className={styles.mainHeading}>{children}</h1>
  )
}
export default MainHeading