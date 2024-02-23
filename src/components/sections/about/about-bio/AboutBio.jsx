import ImageContainer from '../../../layout/containers/image-container/ImageContainer'
import olderJoel from '../../../../assets/img/profile/joel-cutout-kyiv.png'
import JPGImage from '../../../layout/containers/image-container/JPGImage'
import SmallContainer from '../../../layout/containers/small-container/SmallContainer'
import { ReactComponent as FalconIcon } from '../../../../assets/icons/about/falcon.svg'
import { ReactComponent as LibertyIcon } from '../../../../assets/icons/about/statue-of-liberty.svg'
import { ReactComponent as StarWarsIcon } from '../../../../assets/icons/about/starwars.svg'
import SmallIcon from '../../../icons/small-icon/SmallIcon'
import MediumHeader from '../../../headings/medium-header/MediumHeader'
import styles from './AboutBio.module.scss'

function AboutBio() {
  return (
    <div className={styles.aboutBio}>
      <ImageContainer className='bg-yellow'>
        <JPGImage
          src={olderJoel}
          alt='Joel Borofsky in his late 30s with a falcon on his shoulder'
        />
        <SmallContainer className='bg-violet'>
          Joel Borofsky<span className='font-handwriting'>(a bit older)</span>
        </SmallContainer>
        <SmallIcon className='icon1 bg-blue fillVibrant3'>
          <FalconIcon />
        </SmallIcon>
        <SmallIcon className='icon4 bg-violet fillVibrant1'>
          <LibertyIcon />
        </SmallIcon>
        <SmallIcon className='icon3 bg-blue fillVibrant2'>
          <StarWarsIcon />
        </SmallIcon>
      </ImageContainer>
      <div className={styles.bioCard}>
        <MediumHeader className='bg-blue'>What Else?</MediumHeader>
        <p>
          Based in the USA, I am a fullstack developer with an eye for design.
          After years in banking and finance, as well as helping start ups, I
          decided to learn how to code. My passion is around making the web look
          good and function well. I view myself as a fullstack web app developer
          who favors the frontend. While the design tech has caught my eye, I
          also have kept my focus on accessibility and ensuring that the web
          experience remains open and accessible to all.
          <br />
          <br />
          In my downtime you'll find me playing Cities: Skylines (a lot),
          working on my own projects, taking walks, working out, and when time
          and money permit, traveling. I enjoy discovering new experiences
          wherever I happen to find myself.
        </p>
      </div>
    </div>
  )
}
export default AboutBio
