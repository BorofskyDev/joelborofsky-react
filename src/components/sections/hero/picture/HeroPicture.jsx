import ImageContainer from '../../../layout/containers/image-container/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-cutout.png'
import {icons } from '../../../icons/icons'
import styles from './HeroPicture.module.scss'

function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer
        containerBg='bg-violet'
        src={heroPicture}
        alt='Joel Borofsky elementary school photo'
        imageBg='bg-vibrant-blue'
        smallContainerBg='bg-yellow'
        title='Joel Borofsky'
        note="as a wee lad"
        iconBg1='bg-vibrant-red'
        iconFill1='fill-blue'
        icon1={icons.astronaut.path}
        xmlns1={icons.astronaut.xmlns}
        viewBox1={icons.astronaut.viewBox}
        iconBg2='bg-vibrant-green'
        iconFill2='fill-blue'
        icon2={icons.sunflower.path}
        xmlns2={icons.sunflower.xmlns}
        viewBox2={icons.sunflower.viewBox}
      />
    </div>
  )
}
export default HeroPicture
