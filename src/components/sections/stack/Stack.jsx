import styles from '../../../styles/components/sections/stack/Stack.module.scss'
import StackBoxOne from './content-box/StackBoxOne'
import StackBoxThree from './content-box/StackBoxThree'
import StackBoxTwo from './content-box/StackBoxTwo'

function Stack() {
  return (
    <section className={styles.stack}>
        <StackBoxOne />
        <StackBoxTwo />
        <StackBoxThree />
    </section>
  )
}
export default Stack