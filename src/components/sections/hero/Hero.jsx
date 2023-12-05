import styles from '../../../styles/components/sections/hero/Hero.module.scss'
import HeroIntro from './intro/HeroIntro'
import HeroPicture from './picture/HeroPicture'

function Hero() {
  return (
    <section className={styles.hero} >
      <HeroIntro />
      <HeroPicture />
    </section>
  )
}
export default Hero