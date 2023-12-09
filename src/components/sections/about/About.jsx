import FlexSectionWrapper from "../../layout/section/FlexSectionWrapper"
import styles from '../../../styles/components/sections/about/About.module.scss'
import SectionTitle from "../../headings/SectionTitle"
import AboutSummary from "./about-content/AboutSummary"
import AboutBio from "./about-content/AboutBio"

function About() {
  return (
    <FlexSectionWrapper className={`${styles.about} ${'bg2'}`} id="about">
      <SectionTitle className='bg1'>About</SectionTitle>
      <AboutSummary />
      <AboutBio />
    </FlexSectionWrapper>
  )
}
export default About