import FlexColumnSectionWrapper from "../../layout/section/FlexColumnSectionWrapper"
import styles from '../../../styles/components/sections/about/About.module.scss'
import SectionTitle from "../../headings/SectionTitle"
import AboutSummary from "./about-content/AboutSummary"
import AboutBio from "./about-content/AboutBio"

function About() {
  return (
    <FlexColumnSectionWrapper className={`${styles.about} ${'bg2'}`} id="about">
      <SectionTitle className='bg1'>About</SectionTitle>
      <AboutSummary />
      <AboutBio />
    </FlexColumnSectionWrapper>
  )
}
export default About