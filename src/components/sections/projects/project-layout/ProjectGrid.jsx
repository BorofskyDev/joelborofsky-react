import styles from '../../../../styles/components/sections/projects/ProjectGrid.module.scss'

function ProjectGrid({ children, className}) {
const sectionClasses = `${styles.projectGrid} ${className} || ''`

  return (
    <div className={sectionClasses}>ProjectGrid</div>
  )
}
export default ProjectGrid