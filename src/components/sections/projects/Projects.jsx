import styles from '../../../styles/components/sections/projects/Projects.module.scss'
import SectionTitle from '../../headings/SectionTitle'
import ProjectGrid from './project-layout/ProjectGrid'

function Projects({className}) {
  const sectionClasses = `${styles.projects} ${className} || ''`

  return (
    <section className={`${sectionClasses}`}>
      <SectionTitle className=' grid-title bg2'>Projects</SectionTitle>
      <ProjectGrid />
    </section>
  )
}
export default Projects