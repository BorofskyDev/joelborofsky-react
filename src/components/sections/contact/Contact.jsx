import ContactContent from './ContactContent'
import ContactLinks from './ContactLinks'
import styles from '../../../styles/components/sections/contact/Contact.module.scss'


function Contact() {
  return (
    <section className={`bg3 ${styles.contact}`}>
        <ContactContent />
        <ContactLinks />
    </section>
  )
}
export default Contact