import FlexColumnSectionWrapper from '../../layout/section/FlexColumnSectionWrapper'
import SectionTitle from '../../headings/section-title/SectionTitle'
import AboutSummary from './about-content/about-summary/AboutSummary'
import AboutBio from './about-bio/AboutBio'
import styles from './About.module.scss'

function About() {
  return (
    <FlexColumnSectionWrapper
      className={`${styles.about} ${'bg-red'}`}
      id='about'
    >
      <SectionTitle className='bg-blue'>About</SectionTitle>
      <AboutSummary />
      <AboutBio />
    </FlexColumnSectionWrapper>
  )
}
export default About
