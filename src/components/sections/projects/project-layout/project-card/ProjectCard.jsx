import ProjectIcons from './project-icons/ProjectIcons'
import LeftIndents from './project-indents/LeftIndents'
import RightIndents from './project-indents/RightIndents'
import ProjectLinks from './project-links/ProjectLinks'
import ProjectTitle from './project-title/ProjectTitle'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({
  title,
  gitHubHref,
  gitHubTitle,
  liveSiteHref,
  liveSiteTitle,
  className,
}) {
  const cardClasses = `${styles.projectCard} ${className} || ''`

  return (
    <div className={cardClasses}>
      <div className={styles.topHalf}>
        <LeftIndents />
        <ProjectTitle>{title}</ProjectTitle>
        <RightIndents />
        <div>Image</div>
      </div>
      <div className={styles.bottomHalf}>
        <ProjectLinks
          gitHubHref={gitHubHref}
          gitHubTitle={gitHubTitle}
          liveSiteHref={liveSiteHref}
          liveSiteTitle={liveSiteTitle}
        />
        <ProjectIcons />
      </div>
    </div>
  )
}
