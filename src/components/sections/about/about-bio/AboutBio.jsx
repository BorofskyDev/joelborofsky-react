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
          Hello there! 
          <br />
          <br />
          
          Based in the USA, I’m a fullstack
          developer who also loves web design and UI/UX. After spending years
          doing banking and finance in North Carolina and New York, as well as
          helping a few start ups and even attempting one of my own, I decided to
          do the meme and learn to code. My passion is around making the web
          beautiful, accessible, fun, and - probably most importantly - working.

          <br />
          <br />

          My stack of HTML, CSS, JavaScript, Next.js, Node.js, MongoDB, and
          Figma ensure that I’m a good fit for your team. I’ve also been told
          I’m fun!
        </p>
      </div>
    </div>
  )
}
export default AboutBio
