import projectData from '../data/projectData'
import styles from '../../../../styles/components/sections/projects/ProjectGrid.module.scss'

function ProjectGrid({ id, title, description, stack, image, github, demo, className}) {
const sectionClasses = `${styles.projectGrid} ${className} || ''`


  return (
    <div className={sectionClasses} key={id}>
        <div>
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </div>
    </div>
  )
}
export default ProjectGrid