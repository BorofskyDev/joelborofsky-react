import ProjectImage from './project-image/ProjectImage'
import LeftIndents from './project-indents/LeftIndents'
import RightIndents from './project-indents/RightIndents'
import ProjectTitle from './project-title/ProjectTitle'
import styles from './ProjectTopHalf.module.scss'

export default function ProjectTopHalf({ title, src, alt }) {
  return (
    <div className={styles.topHalf}>
      <LeftIndents />
      <ProjectTitle>{title}</ProjectTitle>
      <RightIndents />
      <ProjectImage src={src} alt={alt} />
    </div>
  )
}
