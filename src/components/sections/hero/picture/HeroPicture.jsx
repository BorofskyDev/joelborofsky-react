import ImageContainer from '../../../layout/containers/image-container/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-cutout.png'
import JPGImage from '../../../layout/containers/image-container/JPGImage'
import { ReactComponent as AstronautIcon } from '../../../../assets/icons/navigation/astronaut.svg'
import { ReactComponent as SunflowerIcon } from '../../../../assets/icons/navigation/sunflower.svg'
import SmallIcon from '../../../icons/small-icon/SmallIcon'
import SmallContainer from '../../../layout/containers/small-container/SmallContainer'
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
        note="no really, it's me"
      ></ImageContainer>
    </div>
  )
}
export default HeroPicture
