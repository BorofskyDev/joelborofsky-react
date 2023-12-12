import {projectData} from '../data/projectData'
import styles from '../../../../styles/components/sections/projects/ProjectGrid.module.scss'
import ProjectCard from './ProjectCard'

function ProjectGrid({ className }) {
  const sectionClasses = `${styles.projectGrid} ${className} || ''`

  return (
    <div className={`${sectionClasses}`}>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          stack={project.stack}
          image={project.image}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  )
}
export default ProjectGrid
