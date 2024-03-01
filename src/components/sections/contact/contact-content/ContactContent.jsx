import SectionTitle from '../../../headings/section-title/SectionTitle'
import MainHeading from '../../../headings/xl-heading/MainHeading'
import LargeContainer from '../../../layout/containers/large-container/LargeContainer'
import styles from './ContactContent.module.scss'

function ContactContent() {
  return (
    <div className={`${styles.contactContent} bg-violet`}>
      <SectionTitle className='bg-green'>Contact</SectionTitle>
      <MainHeading>Hello Again!</MainHeading>
      <LargeContainer className='bg-yellow'>Let's work together</LargeContainer>
      <p>
        I'm open for consulting, freelance work, or employment. Feel free to
        reach out!
      </p>
    </div>
  )
}
export default ContactContent
