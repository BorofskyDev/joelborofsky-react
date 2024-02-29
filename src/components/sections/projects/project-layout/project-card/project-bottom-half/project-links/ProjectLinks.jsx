import styles from './ProjectLinks.module.scss'
import ProjectLink from './project-link/ProjectLink'

export default function ProjectLinks({
  gitHubHref,
  liveSiteHref,
}) {
  return (
    <ul className={styles.projectLinks}>
      <ProjectLink linkTitle='GitHub Repository' href={gitHubHref} />
      <ProjectLink linkTitle='Live Site!' href={liveSiteHref} />
    </ul>
  )
}
