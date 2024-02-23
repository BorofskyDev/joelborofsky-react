import styles from './Footer.module.scss'
import SectionTitle from '../../headings/section-title/SectionTitle'
import FooterBlocks from './footer-blocks/FooterBlocks'
import FooterLinks from './footer-links/FooterLinks'

function Footer() {
  return (
    <footer className={`bg-green ${styles.footer}`}>
      <div className={styles.footerTitle}>
        <SectionTitle className='bg-pink'>Footer!</SectionTitle>
      </div>
      <FooterBlocks />
      <FooterLinks />
    </footer>
  )
}
export default Footer
