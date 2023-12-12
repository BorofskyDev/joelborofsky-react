import styles from '../../../../styles/components/sections/projects/ProjectCard.module.scss'

function ProjectCard({
  id,
  title,
  description,
  stack,
  image,
  github,
  demo,
  className,
}) {
  const cardClasses = `${styles.projectCard} ${className} || ''`

  return (
    <div className={cardClasses} key={id}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </div>
      <ul className={styles.cardStack}>
        {stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className={styles.cardLinks}>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          Github
        </a>
        <a href={demo} target='_blank' rel='noopener noreferrer'>
          Demo
        </a>
      </div>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  )
}
export default ProjectCard
