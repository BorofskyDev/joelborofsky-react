import ButtonLink from '../../../links/external-link/ButtonLink'
import styles from './ContactLinks.module.scss'

function ContactLinks() {
  return (
    <div className={styles.contactLinks}>
      <ul>
        <li>
          <ButtonLink className='bg-red' href='#'>
            My GitHub
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='#'>
            My CodePen
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-pink' href='#'>
            My LinkedIn
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-blue' href='#'>
            My Freelance Site
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-green' href='#'>
            My Email
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default ContactLinks
