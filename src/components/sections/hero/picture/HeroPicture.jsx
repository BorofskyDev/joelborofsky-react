import ImageContainer from '../../../layout/containers/image-container/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-cutout.png'
import {icons } from '../../../icons/icons'
import styles from './HeroPicture.module.scss'

function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer
        containerBg='bg-blue'
        src={heroPicture}
        alt='Joel Borofsky elementary school photo'
        imageBg='bg-vibrant-blue'
        smallContainerBg='bg-orange'
        title='Joel Borofsky'
        note="a wee lad"
        iconBg1='bg-vibrant-purple'
        iconFill1='fill-vibrant-red'
        icon1={icons.astronaut.path}
        xmlns1={icons.astronaut.xmlns}
        viewBox1={icons.astronaut.viewBox}
        iconBg2='bg-yellow'
        iconFill2='fill-vibrant-blue'
        icon2={icons.sunflower.path}
        xmlns2={icons.sunflower.xmlns}
        viewBox2={icons.sunflower.viewBox}
      />
    </div>
  )
}
export default HeroPicture
