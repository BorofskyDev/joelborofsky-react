import ProjectTopHalf from './project-top-half/ProjectTopHalf'
import ProjectBottomHalf from './project-bottom-half/ProjectBottomHalf'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({
  title,
  src,
  alt,
  gitHubHref,
  liveSiteHref,
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
      <ProjectBottomHalf
        gitHubHref={gitHubHref}
        liveSiteHref={liveSiteHref}
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
    </div>
  )
}
