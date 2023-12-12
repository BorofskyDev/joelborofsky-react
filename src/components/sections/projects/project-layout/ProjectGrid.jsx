import {projectData} from '../data/projectData'
import { getRandomBgClass } from './getRandomBgClass'
import styles from '../../../../styles/components/sections/projects/ProjectGrid.module.scss'
import ProjectCard from './ProjectCard'

function ProjectGrid({ className }) {
  const sectionClasses = `${styles.projectGrid} ${className} || ''`

  return (
    <div className={`${sectionClasses}`}>
      {projectData.map((project) => {
        const cardBgClass = getRandomBgClass(['bg4', 'bgDark', 'bgBlack'])

        return (
            <ProjectCard
                key={project.id}
                className={cardBgClass}
                {...project}
            />
        )
      })}
    </div>
  )
}
export default ProjectGrid
