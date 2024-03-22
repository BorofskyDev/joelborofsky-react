import styles from './Footer.module.scss'
import SectionTitle from '../../headings/section-title/SectionTitle'
import FooterBlocks from './footer-blocks/FooterBlocks'
import FooterLinks from './footer-links/FooterLinks'
import logo from '../../../../public/favicon.svg'

function Footer() {
  return (
    <footer className={` ${styles.footer}`}>
      <div className={styles.footerTitle}>
        <SectionTitle className='bg-pink'>Footer!</SectionTitle>
      </div>
      <FooterBlocks />
      <FooterLinks />
      <img src={logo} alt='logo' />
    </footer>
  )
}
export default Footer
