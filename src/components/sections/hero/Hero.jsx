import styles from '../../../styles/components/sections/hero/Hero.module.scss'
import HeroIntro from './intro/HeroIntro'

function Hero() {
  return (
    <section className={styles.hero} >
      <HeroIntro />
    </section>
  )
}
export default Hero