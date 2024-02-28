import { icons } from '../../../../../icons/icons'
import StackContainer from '../../../stack-containers/StackContainer'
import styles from './StackBoxTwo.module.scss'
import LargeIcon from '../../../../../icons/large-icon/LargeIcon'

function StackBoxTwo() {
  return (
    <StackContainer className={`bg-yellow ${styles.stackBoxTwo}`}>
      <LargeIcon
        icon={icons.html.path}
        xmlns={icons.html.xmlns}
        viewBox={icons.html.viewBox}
        className={`${'bg-orange'} ${'fill-vibrant-purple'} ${
          styles.stackIcon1
        }`}
      />
      <LargeIcon
        icon={icons.css.path}
        xmlns={icons.css.xmlns}
        viewBox={icons.css.viewBox}
        className={`${'bg-light'} ${'fill-vibrant-blue'} ${styles.stackIcon2}`}
      />
      <LargeIcon
        icon={icons.react.path}
        xmlns={icons.react.xmlns}
        viewBox={icons.react.viewBox}
        className={`${'bg-vibrant-blue'} ${'fill-blue'} ${styles.stackIcon3}`}
      />
      <LargeIcon
        icon={icons.javaScript.path}
        xmlns={icons.javaScript.xmlns}
        viewBox={icons.javaScript.viewBox}
        className={`${'bg-vibrant-orange'} ${'fill-yellow'} ${
          styles.stackIcon4
        }`}
      />
    </StackContainer>
  )
}
export default StackBoxTwo
