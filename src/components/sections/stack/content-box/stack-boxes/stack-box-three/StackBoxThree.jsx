import { icons } from '../../../../../icons/icons'
import LargeIcon from '../../../../../icons/large-icon/LargeIcon'
import StackContainer from '../../../stack-containers/StackContainer'
import styles from './StackBoxThree.module.scss'

function StackBoxThree() {
  return (
    <StackContainer className={`bg-blue ${styles.stackBoxThree}`}>
      <LargeIcon
        icon={icons.sass.path}
        xmlns={icons.sass.xmlns}
        viewBox={icons.sass.viewBox}
        className={`${'bg-pink'} ${'fill-vibrant-pink'} ${styles.stackIcon1}`}
      />
      <LargeIcon
        icon={icons.mongodb.path}
        xmlns={icons.mongodb.xmlns}
        viewBox={icons.mongodb.viewBox}
        className={`${'bg-green'} ${'fill-vibrant-red'} ${styles.stackIcon2}`}
      />
      <LargeIcon
        icon={icons.nodejs.path}
        xmlns={icons.nodejs.xmlns}
        viewBox={icons.nodejs.viewBox}
        className={`${'bg-vibrant-green'} ${'fill-yellow'} ${
          styles.stackIcon3
        }`}
      />
      <LargeIcon
        icon={icons.figma.path}
        xmlns={icons.figma.xmlns}
        viewBox={icons.figma.viewBox}
        className={`${'bg-red'} ${'fill-vibrant-purple'} ${styles.stackIcon4}`}
      />
    </StackContainer>
  )
}
export default StackBoxThree
