import { icons } from '../../../icons/icons'
import ImageContainer from '../../../layout/containers/image-container/ImageContainer'
import aboutPicture from '../../../../assets/img/profile/joel-cutout-kyiv.png'
import MediumHeader from '../../../headings/medium-header/MediumHeader'
import styles from './AboutBio.module.scss'

function AboutBio() {
  return (
    <div className={styles.aboutBio}>
      <ImageContainer
        containerBg='bg-yellow'
        src={aboutPicture}
        alt='Joel Borofsky with a falcon on his shoulder'
        imageBg='bg-vibrant-pink'
        smallContainerBg='bg-violet'
        title='Joel Borofsky'
        note='a bit older'
        iconBg1='bg-blue'
        iconFill1='fill-vibrant-blue'
        icon1={icons.falcon.path}
        xmlns1={icons.falcon.xmlns}
        viewBox1={icons.falcon.viewBox}
        iconBg2='bg-vibrant-blue'
        iconFill2='fill-red'
        icon2={icons.liberty.path}
        xmlns2={icons.liberty.xmlns}
        viewBox2={icons.liberty.viewBox}
      />
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
