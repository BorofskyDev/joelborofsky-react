import FlexColumnSectionWrapper from '../../layout/section/FlexColumnSectionWrapper'
import styles from '../../../styles/components/sections/about/About.module.scss'
import SectionTitle from '../../headings/section-title/SectionTitle'
import AboutSummary from './about-content/about-summary/AboutSummary'
import AboutBio from './about-bio/AboutBio'

function About() {
  return (
    <FlexColumnSectionWrapper className={`${styles.about} ${'bg2'}`} id='about'>
      <SectionTitle className='bg1'>About</SectionTitle>
      <AboutSummary />
      <AboutBio />
    </FlexColumnSectionWrapper>
  )
}
export default About
