import styles from './StackIconArea.module.scss'

function StackIconArea({children}) {
  return (
    <div className={styles.stackIconArea}>{children}</div>
  )
}
export default StackIconArea