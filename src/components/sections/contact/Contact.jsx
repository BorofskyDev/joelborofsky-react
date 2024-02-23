import ContactContent from './contact-content/ContactContent'
import ContactLinks from './contact-link/ContactLinks'
import styles from './Contact.module.scss'


function Contact() {
  return (
    <section className={`bg3 ${styles.contact}`}>
        <ContactContent />
        <ContactLinks />
    </section>
  )
}
export default Contact