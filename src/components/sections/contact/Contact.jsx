import ContactContent from './contact-content/ContactContent'
import ContactLinks from './contact-link/ContactLinks'
import styles from './Contact.module.scss'

function Contact() {
  return (
    <section className={`${styles.contact} bg-orange`}>
      <ContactContent />
      <ContactLinks />
    </section>
  )
}
export default Contact
