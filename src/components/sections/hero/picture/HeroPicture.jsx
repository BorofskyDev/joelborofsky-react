import styles from '../../../../styles/components/sections/hero/HeroPicture.module.scss'
import ImageContainer from '../../../layout/containers/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-1.jpg'
import JPGImage from '../../../images/JPGImage'
import { ReactComponent as AstronautIcon } from '../../../../assets/icons/navigation/astronaut.svg'
import { ReactComponent as SunflowerIcon } from '../../../../assets/icons/navigation/sunflower.svg'
import SmallIcon from '../../../icons/small-icon/SmallIcon'
import SmallContainer from '../../../layout/containers/SmallContainer'

function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer className='bg3'>
        <JPGImage
          src={heroPicture}
          alt='Joel Borofsky around the age of 7 or 8 in a school photo'
        />
        <SmallContainer className='bg4'>Joel Borofsky</SmallContainer>
        <SmallIcon className='icon1 bg6 fillVibrant2'>
          <AstronautIcon />
        </SmallIcon>
        <SmallIcon className='icon2 bg4 fillVibrant1'>
          <SunflowerIcon />
        </SmallIcon>
      </ImageContainer>
    </div>
  )
}
export default HeroPicture
