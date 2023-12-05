import styles from '../../../../styles/components/sections/hero/HeroPicture.module.scss'
import ImageContainer from '../../../layout/containers/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-1.jpg'
import JPGImage from '../../../layout/images/JPGImage'
import sunflower from '../../../../assets/icons/navigation/sunflower.svg'


function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer className='bg3'>
        <JPGImage
          src={heroPicture}
          alt='Joel Borofsky around the age of 7 or 8 in a school photo'
        />
        
      </ImageContainer>
    </div>
  )
}
export default HeroPicture
