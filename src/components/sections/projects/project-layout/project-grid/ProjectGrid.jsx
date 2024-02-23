import { projectData } from '../../data/projectData'
import { getRandomBgClass } from '../getRandomBgClass'
import ProjectCard from '../project-card/ProjectCard'
import styles from './ProjectGrid.module.scss'

function ProjectGrid({ className }) {
  const sectionClasses = `${styles.projectGrid} ${className} || ''`

  return (
    <div className={`${sectionClasses}`}>
      {projectData.map((project) => {
        const cardBgClass = getRandomBgClass(['bg4', 'bgDark', 'bgBlack'])

        return (
          <ProjectCard key={project.id} className={cardBgClass} {...project} />
        )
      })}
    </div>
  )
}
export default ProjectGrid
