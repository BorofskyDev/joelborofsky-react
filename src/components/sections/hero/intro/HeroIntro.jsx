import XLHeading from '../../../headings/XLHeading'
import LargeContainer from '../../../layout/containers/LargeContainer'

function HeroIntro() {
  return (
    <div className='bg1'>
      <XLHeading>Hello!</XLHeading>
      <p>
        My name is <span>Joel</span>
      </p>
      <p>I am a...</p>
      <LargeContainer className='bg2'>Frontend Developer</LargeContainer>
    </div>
  )
}
export default HeroIntro
