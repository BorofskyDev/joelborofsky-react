import AboutCard from './AboutCard'
import styles from '../../../../styles/components/sections/about/AboutSummary.module.scss'
import { ReactComponent as DeveloperIcon } from '../../../../assets/icons/about/developer.svg'
import { ReactComponent as DesignerIcon } from '../../../../assets/icons/about/designer.svg'
import { ReactComponent as BusinessIcon } from '../../../../assets/icons/about/banker.svg'
import MediumHeader from '../../../headings/MediumHeader'
import SmallIcon from '../../../icons/SmallIcon'

function AboutSummary() {
  return (
    <div className={styles.aboutSummary}>
      <AboutCard className='bg1' >
        <SmallIcon className='icon1 bg5 fillVibrant4' ><DeveloperIcon /></SmallIcon>
        <MediumHeader className='bg3'>Developer</MediumHeader>
        <p>
          Ever since writing my first code of JavaScript, I've been hooked on
          the frontend. I love the challenge of building a great user
          experience by utilizing SCSS, Styled Components, Three.js, all within 
          a React framework.
        </p>
      </AboutCard>
      <AboutCard className='bg3' >
        <SmallIcon className='icon1 bg4 fillVibrant3' ><DesignerIcon /></SmallIcon>
        <MediumHeader className='bg6'>Designer</MediumHeader>
        <p>
          It's not enough to build, I also like to design. I excel in knowing
          what the end-user likes, but in a way that will help them achieve
          their business goals as well.
        </p>
      </AboutCard>
      <AboutCard className='bg5' >
        <SmallIcon className='icon1 bg1 fillVibrant2' ><BusinessIcon /></SmallIcon>
        <MediumHeader className='bg4'>Business<span className='font-handwriting'>(er)</span></MediumHeader>
        <p>
          I spent close to a decade in banking around sales and service. My
          background in banking services, commercial credit, and investor
          relations provide service to any company beyond the code.
        </p>
      </AboutCard>
    </div>
  )
}
export default AboutSummary
