import SectionTitle from '../../../headings/section-title/SectionTitle'
import MainHeading from '../../../headings/xl-heading/MainHeading'
import LargeContainer from '../../../layout/containers/large-container/LargeContainer'
import MediumIcon from '../../../icons/medium-icon/MediumIcon'
import { icons } from '../../../icons/icons'
import styles from './ContactContent.module.scss'

function ContactContent() {
  return (
    <div className={`${styles.contactContent} bg-violet`}>
      <SectionTitle className='bg-green'>Contact</SectionTitle>
      <MainHeading>Hello Again!</MainHeading>
      <LargeContainer className='bg-yellow'>
        <span>Let's work together!</span>
        <MediumIcon
          icon={icons.handshake.path}
          viewBox={icons.handshake.viewBox}
          xmlns={icons.handshake.xmlns}
          className='bg-vibrant-purple fill-blue top-right'
        />
      </LargeContainer>
      <p>
        I'm open for consulting, freelance work, or employment. Feel free to
        reach out!
      </p>
    </div>
  )
}
export default ContactContent
