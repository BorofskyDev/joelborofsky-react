import ProjectIcon from './project-icons/project-icon/ProjectIcon'
import ProjectIcons from './project-icons/ProjectIcons'
import ProjectLinks from './project-links/ProjectLinks'
import ProjectTopHalf from './project-top-half/ProjectTopHalf'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({
  title,
  src,
  alt,
  gitHubHref,
  gitHubTitle,
  liveSiteHref,
  liveSiteTitle,
  className,
  techIcon1,
  xmlns1,
  viewBox1,
  techIcon2,
  xmlns2,
  viewBox2,
  techIcon3,
  xmlns3,
  viewBox3,
  decorativeIcon,
  xmlns4,
  viewBox4,
  iconFill,

}) {
  const cardClasses = `${styles.projectCard} ${className} || ''`

  return (
    <div className={cardClasses}>
      <ProjectTopHalf title={title} src={src} alt={alt} />
      {/* <div className={styles.bottomHalf}>
        <ProjectLinks
          gitHubHref={gitHubHref}
          gitHubTitle={gitHubTitle}
          liveSiteHref={liveSiteHref}
          liveSiteTitle={liveSiteTitle}
        />
        <ProjectIcons
          techIcon1={techIcon1}
          xmlns1={xmlns1}
          viewBox1={viewBox1}
          techIcon2={techIcon2}
          xmlns2={xmlns2}
          viewBox2={viewBox2}
          techIcon3={techIcon3}
          xmlns3={xmlns3}
          viewBox3={viewBox3}
          decorativeIcon={decorativeIcon}
          xmlns4={xmlns4}
          viewBox4={viewBox4}
          iconFill={iconFill}
        />
      </div> */}
    </div>
  )
}
