import LargeContainer from '../../../layout/containers/large-container/LargeContainer'
import MainHeading from '../../../headings/xl-heading/MainHeading'
import MediumIcon from '../../../icons/medium-icon/MediumIcon'
import { icons } from '../../../icons/icons'
import styles from './HeroIntro.module.scss'

function HeroIntro() {
  const notBad = icons.notBad

  return (
    <div className={styles.heroIntro}>
      <MainHeading>Hello!</MainHeading>
      <p>
        My name is <span className='font-handwriting fs-600'>Joel</span>
      </p>
      <p>I am a...</p>
      <LargeContainer className='bg-red font-handwriting'>
        <span>Fullstack Developer</span>
        <MediumIcon
          icon={notBad.path}
          viewBox={notBad.viewBox}
          xmlns={notBad.xmlns}
          className='bg-pink fill-vibrant-blue'
        />
      </LargeContainer>
    </div>
  )
}
export default HeroIntro
