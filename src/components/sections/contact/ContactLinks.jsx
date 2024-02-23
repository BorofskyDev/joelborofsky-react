import styles from '../../../styles/components/sections/contact/ContactLinks.module.scss'
import ButtonLink from '../../links/external-link/ButtonLink'

function ContactLinks() {
  return (
    <div className={styles.contactLinks}>
      <ul>
        <li>
          <ButtonLink className='bg2' href='#'>
            My GitHub
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg4' href='#'>
            My CodePen
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg6' href='#'>
            My LinkedIn
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg1' href='#'>
            My Freelance Site
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg5' href='#'>
            My Email
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default ContactLinks
