import styles from '../../../styles/components/sections/stack/Stack.module.scss'
import StackBoxOne from './content-box/StackBoxOne'
import StackBoxTwo from './content-box/StackBoxTwo'

function Stack() {
  return (
    <section className={styles.stack}>
        <StackBoxOne />
        <StackBoxTwo />
    </section>
  )
}
export default Stack