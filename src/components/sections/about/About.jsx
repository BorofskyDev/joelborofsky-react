import FlexSectionWrapper from "../../layout/section/FlexSectionWrapper"
import styles from '../../../styles/components/sections/about/About.module.scss'
import SectionTitle from "../../headings/SectionTitle"

function About() {
  return (
    <FlexSectionWrapper className={`${styles.about} ${'bg2'}`} id="about">
      <SectionTitle className='bg1'>About</SectionTitle>
    </FlexSectionWrapper>
  )
}
export default About