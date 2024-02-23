import { ReactComponent as SassIcon } from '../../../../../../assets/icons/tech/sass.svg'
import { ReactComponent as ThreeIcon } from '../../../../../../assets/icons/tech/threejs.svg'
import { ReactComponent as TailwindIcon } from '../../../../../../assets/icons/tech/tailwind-css.svg'
import { ReactComponent as StyledIcon } from '../../../../../../assets/icons/tech/styled-components.svg'
import StackContainer from '../../../stack-containers/StackContainer'
import MediumIcon from '../../../../../icons/medium-icon/MediumIcon'
import styles from './StackBoxThree.module.scss'

function StackBoxThree() {
  return (
    <StackContainer className={`bg-blue ${styles.stackBoxThree}`}>
      <MediumIcon className={`bg-pink ${styles.stackIcon1}`}>
        <SassIcon className='fillVibrant2' />
      </MediumIcon>
      <MediumIcon className={`bg-red ${styles.stackIcon2}`}>
        <ThreeIcon className='fillVibrant5' />
      </MediumIcon>
      <MediumIcon className={`bg-yellow ${styles.stackIcon3}`}>
        <TailwindIcon className='fillVibrant3' />
      </MediumIcon>
      <MediumIcon className={`bg-green ${styles.stackIcon4}`}>
        <StyledIcon className='fillVibrant4' />
      </MediumIcon>
    </StackContainer>
  )
}
export default StackBoxThree
