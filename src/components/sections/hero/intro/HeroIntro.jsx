import XLHeading from '../../../headings/XLHeading'
import LargeContainer from '../../../layout/containers/LargeContainer'
import styles from '../../../../styles/components/sections/hero/HeroIntro.module.scss'
import SmallIcon from '../../../icons/SmallIcon'
import { ReactComponent as NotBad } from '../../../../assets/icons/projects/not-bad.svg'

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
