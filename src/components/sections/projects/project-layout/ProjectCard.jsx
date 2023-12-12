import styles from '../../../../styles/components/sections/projects/ProjectCard.module.scss'

function ProjectCard({ className}) {
    const cardClasses = `${styles.projectCard} ${className} || ''`

  return (
    <div className={cardClasses}>ProjectCard</div>
  )
}
export default ProjectCard