import SectionTitle from '../../headings/section-title/SectionTitle'
import XLHeading from '../../headings/xl-heading/XLHeading'
import styles from '../../../styles/components/sections/contact/ContactContent.module.scss'
import LargeContainer from '../../layout/containers/large-container/LargeContainer'

function ContactContent() {
  return (
    <div className={styles.contactContent}>
      <SectionTitle className='bg5'>Contact</SectionTitle>
      <XLHeading>Hello Again!</XLHeading>
      <LargeContainer className='bg4'>Let's work together</LargeContainer>
      <p>
        I'm open for consulting, freelance work, or employment. Feel free to
        reach out!
      </p>
    </div>
  )
}
export default ContactContent
