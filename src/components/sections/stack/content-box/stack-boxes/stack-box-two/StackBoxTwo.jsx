import { ReactComponent as HtmlIcon } from '../../../../../../assets/icons/tech/html.svg'
import { ReactComponent as CssIcon } from '../../../../../../assets/icons/tech/css.svg'
import { ReactComponent as JsIcon } from '../../../../../../assets/icons/tech/javascript.svg'
import { ReactComponent as ReactIcon } from '../../../../../../assets/icons/tech/react.svg'
import StackContainer from '../../../stack-containers/StackContainer'
import MediumIcon from '../../../../../icons/medium-icon/MediumIcon'
import styles from './StackBoxTwo.module.scss'

function StackBoxTwo() {
  return (
    <StackContainer className={`bg4 ${styles.stackBoxTwo}`}>
      <MediumIcon className={`bg2 ${styles.stackIcon1}`}>
        <HtmlIcon className='fillVibrant3' />
      </MediumIcon>
      <MediumIcon className={`bgLight ${styles.stackIcon2}`}>
        <CssIcon className='fillVibrant1' />
      </MediumIcon>
      <MediumIcon className={`bg1 ${styles.stackIcon3}`}>
        <JsIcon className='fillVibrant2' />
      </MediumIcon>
      <MediumIcon className={`bgDark ${styles.stackIcon4}`}>
        <ReactIcon className='fillVibrant5' />
      </MediumIcon>
    </StackContainer>
  )
}
export default StackBoxTwo
