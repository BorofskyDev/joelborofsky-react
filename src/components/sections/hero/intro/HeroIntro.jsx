import XLHeading from '../../../headings/xl-heading/XLHeading'
import LargeContainer from '../../../layout/containers/large-container/LargeContainer'
import SmallIcon from '../../../icons/small-icon/SmallIcon'
import { ReactComponent as NotBad } from '../../../../assets/icons/projects/not-bad.svg'
import styles from './HeroIntro.module.scss'

function HeroIntro() {
  return (
    <div className={styles.heroIntro}>
      <XLHeading>Hello!</XLHeading>
      <p>
        My name is <span className='font-handwriting fs-600'>Joel</span>
      </p>
      <p>I am a...</p>
      <LargeContainer className='bg2 font-handwriting'><span>Fullstack Developer</span>
      <SmallIcon className='icon2 bg6 fillVibrant3'>
        <NotBad />
        </SmallIcon>
      </LargeContainer>
    </div>
  )
}
export default HeroIntro
