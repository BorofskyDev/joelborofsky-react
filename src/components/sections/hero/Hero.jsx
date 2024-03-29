import HeroIntro from './intro/HeroIntro'
import HeroPicture from './picture/HeroPicture'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section id='home' className={styles.hero} >
      <HeroIntro />
      <HeroPicture />
    </section>
  )
}
export default Hero