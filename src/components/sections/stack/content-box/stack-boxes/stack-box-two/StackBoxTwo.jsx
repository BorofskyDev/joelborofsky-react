import { icons } from '../../../../../icons/icons'
import StackContainer from '../../../stack-containers/StackContainer'
import styles from './StackBoxTwo.module.scss'
import LargeIcon from '../../../../../icons/large-icon/LargeIcon'

function StackBoxTwo() {
  return (
    <StackContainer className={`bg-yellow ${styles.stackBoxTwo}`}>
      <LargeIcon />
    </StackContainer>
  )
}
export default StackBoxTwo
