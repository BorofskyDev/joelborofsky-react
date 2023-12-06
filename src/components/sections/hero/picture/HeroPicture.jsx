import styles from '../../../../styles/components/sections/hero/HeroPicture.module.scss'
import ImageContainer from '../../../layout/containers/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-1.jpg'
import JPGImage from '../../../images/JPGImage'
import { ReactComponent as AstronautIcon } from '../../../../assets/icons/navigation/astronaut.svg'
import { ReactComponent as SunflowerIcon } from '../../../../assets/icons/navigation/sunflower.svg'
import { ReactComponent as SmilingSun } from '../../../../assets/icons/decorative/smiling-sun.svg'
import { ReactComponent as Beach } from '../../../../assets/icons/decorative/beach.svg'
import SmallIcon from '../../../icons/SmallIcon'

function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer className='bg3'>
        <JPGImage
          src={heroPicture}
          alt='Joel Borofsky around the age of 7 or 8 in a school photo'
        />
        <SmallIcon className='icon1 bg6 fillVibrant2'>
          <AstronautIcon />
        </SmallIcon>
        <SmallIcon className='icon2 bg4 fillVibrant1'>
          <SunflowerIcon />
        </SmallIcon>
        <SmallIcon className='icon3 bg1 fillVibrant3'>
          <SmilingSun />
        </SmallIcon>
        <SmallIcon className='icon4 bg6 fillVibrant5'>
          <Beach />
        </SmallIcon>
      </ImageContainer>
    </div>
  )
}
export default HeroPicture
