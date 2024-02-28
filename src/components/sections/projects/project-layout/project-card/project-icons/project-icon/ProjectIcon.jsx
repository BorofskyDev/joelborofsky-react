import styles from './ProjectIcon.module.scss'
import ProjectIconImg from './project-icon-img/ProjectIconImg'

export default function ProjectIcon({
  className,
  icon,
  viewBox,
  xmlns,
  iconFill,
}) {
  return (
    <div className={styles.projectIcon} aria-hidden>
      <ProjectIconImg
        icon={icon}
        viewBox={viewBox}
        xmlns={xmlns}
        iconFill={iconFill}
      />
    </div>
  )
}
