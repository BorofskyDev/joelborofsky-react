import ImageContainer from "../../../layout/containers/ImageContainer"
import olderJoel from '../../../../assets/img/profile/me-kyiv.jpg'
import JPGImage from "../../../images/JPGImage"
import SmallContainer from "../../../layout/containers/SmallContainer"
import { ReactComponent as FalconIcon } from '../../../../assets/icons/about/falcon.svg'
import { ReactComponent as LibertyIcon } from '../../../../assets/icons/about/statue-of-liberty.svg'
import { ReactComponent as StarWarsIcon } from '../../../../assets/icons/about/starwars.svg'
import styles from '../../../../styles/components/sections/about/AboutBio.module.scss'
import SmallIcon from "../../../icons/SmallIcon"



function AboutBio() {
  return (
    <div className={styles.aboutBio}>
    <ImageContainer className='bg4'>
      <JPGImage src={olderJoel} alt='Joel Borofsky in his late 30s with a falcon on his shoulder' />
      <SmallContainer className='bg3'>Joel Borofsky<span className="font-handwriting">(a bit older)</span></SmallContainer>
      <SmallIcon className='icon1 bg1 fillVibrant3'><FalconIcon /></SmallIcon>
      <SmallIcon className='icon4 bg3 fillVibrant1'><LibertyIcon /></SmallIcon>
      <SmallIcon className='icon3 bg1 fillVibrant2'><StarWarsIcon /></SmallIcon>
    </ImageContainer>
    </div>
  )
}
export default AboutBio