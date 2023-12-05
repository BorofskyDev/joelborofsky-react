import styles from '../../../../styles/components/sections/hero/HeroPicture.module.scss'
import ImageContainer from '../../../layout/containers/ImageContainer'
import heroPicture from '../../../../assets/img/profile/joel-kid-1.jpg'
import JPGImage from '../../../images/JPGImage'
import astronaut from '../../../../assets/icons/navigation/astronaut.svg'
import SmallIcon from '../../../icons/SmallIcon'

function HeroPicture() {
  return (
    <div className={styles.heroPicture}>
      <ImageContainer className='bg3'>
        <JPGImage
          src={heroPicture}
          alt='Joel Borofsky around the age of 7 or 8 in a school photo'
        />
        {/* <SmallIcon src={astronaut} className='icon1 bg4 fill1' /> */}
        {/* {astronaut && <SmallIcon src={astronaut} className='icon1 bg4 fill1' /> */}
        <div className=''>{astronaut}</div>
      </ImageContainer>
    </div>
  )
}
export default HeroPicture
