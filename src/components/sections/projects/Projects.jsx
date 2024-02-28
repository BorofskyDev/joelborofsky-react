import SectionTitle from '../../headings/section-title/SectionTitle'
import ProjectCard from './project-layout/project-card/ProjectCard'
import ProjectGrid from './project-layout/project-grid/ProjectGrid'
import styles from './Projects.module.scss'

function Projects({ className }) {
  const sectionClasses = `${styles.projects} ${className} || ''`

  return (
    <section className={`${sectionClasses}`}>
      <SectionTitle className=' grid-title bg-red'>Projects</SectionTitle>
      <ProjectCard />
    </section>
  )
}
export default Projects
