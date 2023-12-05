import XLHeading from '../../../headings/XLHeading'
import LargeContainer from '../../../layout/containers/LargeContainer'
import styles from '../../../../styles/components/sections/hero/HeroIntro.module.scss'

function HeroIntro() {
  return (
    <div className={styles.heroIntro}>
      <XLHeading>Hello!</XLHeading>
      <p>
        My name is <span className='font-handwriting fs-600'>Joel</span>
      </p>
      <p>I am a...</p>
      <LargeContainer className='bg2 font-handwriting'>Frontend Developer</LargeContainer>
    </div>
  )
}
export default HeroIntro
