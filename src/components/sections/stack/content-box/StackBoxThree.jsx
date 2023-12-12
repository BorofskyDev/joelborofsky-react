import { ReactComponent as SassIcon } from '../../../../assets/icons/tech/sass.svg'
import { ReactComponent as ThreeIcon } from '../../../../assets/icons/tech/threejs.svg'
import { ReactComponent as TailwindIcon } from '../../../../assets/icons/tech/tailwind-css.svg'
import { ReactComponent as StyledIcon } from '../../../../assets/icons/tech/styled-components.svg'
import StackContainer from '../stack-containers/StackContainer'
import styles from '../../../../styles/components/sections/stack/stack-boxes/StackBoxThree.module.scss'
import MediumIcon from '../../../icons/MediumIcon'

function StackBoxThree() {
  return (
    <StackContainer className={`bg1 ${styles.stackBoxThree}`}>
      <MediumIcon className={`bg6 ${styles.stackIcon1}`}>
        <SassIcon className='fillVibrant2' />
      </MediumIcon>
      <MediumIcon className={`bg2 ${styles.stackIcon2}`}>
        <ThreeIcon className='fillVibrant5' />
      </MediumIcon>
      <MediumIcon className={`bg5 ${styles.stackIcon3}`}>
        <TailwindIcon className='fillVibrant5' />
      </MediumIcon>
      <MediumIcon className={`bg3 ${styles.stackIcon4}`}>
        <StyledIcon className='fillVibrant4' />
      </MediumIcon>
    </StackContainer>
  )
}
export default StackBoxThree
