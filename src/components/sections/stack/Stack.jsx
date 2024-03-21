import StackBoxFour from './content-box/stack-boxes/stack-box-four/StackBoxFour'
import StackBoxOne from './content-box/stack-boxes/stack-box-one/StackBoxOne'
import StackBoxThree from './content-box/stack-boxes/stack-box-three/StackBoxThree'
import StackBoxTwo from './content-box/stack-boxes/stack-box-two/StackBoxTwo'
import styles from './Stack.module.scss'

function Stack() {
  return (
    <section id='skills' className={styles.stack}>
        <StackBoxOne />
        <StackBoxTwo />
        <StackBoxThree />
        <StackBoxFour />
    </section>
  )
}
export default Stack