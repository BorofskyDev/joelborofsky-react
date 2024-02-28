import styles from './ProjectIcons.module.scss'
import ProjectIcon from './project-icon/ProjectIcon'

export default function ProjectIcons({ icon, xmlns, viewBox, iconFill}) {
    return (
        <div className={styles.projectIcons}>
            <ProjectIcon icon={icon} xmlns={xmlns} viewBox={viewBox} iconFill={iconFill} />
        </div>
    )
}