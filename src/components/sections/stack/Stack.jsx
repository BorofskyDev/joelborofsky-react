import styles from '../../../styles/components/sections/stack/Stack.module.scss'
import StackBoxOne from './content-box/StackBoxOne'

function Stack() {
  return (
    <section className={styles.stack}>
        <StackBoxOne />
    </section>
  )
}
export default Stack