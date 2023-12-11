import styles from '../../../../styles/components/sections/stack/content-box/StackIconArea.module.scss'

function StackIconArea({children}) {
  return (
    <div className={styles.stackIconArea}>{children}</div>
  )
}
export default StackIconArea