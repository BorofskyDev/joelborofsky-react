import LargeContainer from '../../../layout/containers/large-container/LargeContainer'
import SmallIcon from '../../../icons/small-icon/SmallIcon'
import { ReactComponent as NotBad } from '../../../../assets/icons/projects/not-bad.svg'
import styles from './HeroIntro.module.scss'
import MainHeading from '../../../headings/xl-heading/MainHeading'

function HeroIntro() {
  return (
    <div className={styles.heroIntro}>
      <MainHeading>Hello!</MainHeading>
      <p>
        My name is <span className='font-handwriting fs-600'>Joel</span>
      </p>
      <p>I am a...</p>
      <LargeContainer className='bg-red font-handwriting'>
        <span>Fullstack Developer</span>
        <SmallIcon className='icon2 bg-pink fillVibrant3'>
          <NotBad />
        </SmallIcon>
      </LargeContainer>
    </div>
  )
}
export default HeroIntro
