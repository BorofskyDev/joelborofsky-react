import styles from '../../../styles/layout/footer/Footer.module.scss'
import SectionTitle from '../../headings/SectionTitle'
import FooterBlocks from './footer-blocks/FooterBlocks'
import FooterLinks from './footer-links/FooterLinks'

function Footer() {
  return (
    <footer className={`bg5 ${styles.footer}`}>
      <div className={styles.footerTitle}>
      <SectionTitle className='bg6'>Footer!</SectionTitle>

      </div>
      <FooterBlocks />
      <FooterLinks />
    </footer>
  )
}
export default Footer