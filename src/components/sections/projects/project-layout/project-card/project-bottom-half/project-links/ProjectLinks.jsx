import styles from './ProjectLinks.module.scss'
import ProjectLink from './project-link/ProjectLink'

export default function ProjectLinks({
  gitHubTitle,
  liveSiteTitle,
  gitHubHref,
  liveSiteHref,
}) {
  return (
    <ul className={styles.projectLinks}>
      <ProjectLink linkTitle={gitHubTitle} href={gitHubHref} />
      <ProjectLink linkTitle={liveSiteTitle} href={liveSiteHref} />
    </ul>
  )
}
