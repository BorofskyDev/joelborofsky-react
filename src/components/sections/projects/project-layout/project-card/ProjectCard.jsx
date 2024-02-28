import { getRandomBgClass } from '../getRandomBgClass'
import styles from './ProjectCard.module.scss'
import ProjectIcons from './project-icons/ProjectIcons'
import LeftIndents from './project-indents/LeftIndents'
import RightIndents from './project-indents/RightIndents'
import ProjectLinks from './project-links/ProjectLinks'
import ProjectTitle from './project-title/ProjectTitle'

export default function ProjectCard({
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
  // const linkBgClass = getRandomBgClass(['bgDark', 'bgBlack'])
  // const linkBgClass2 = getRandomBgClass(['bgDark', 'bgBlack'])

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
          gitHubHref='#'
          gitHubTitle="This Site's Repository!"
          liveSiteHref='#'
          liveSiteTitle="This Site's Live Site!"
        />
        <ProjectIcons />
      </div>
    </div>
    // <div className={cardClasses} key={id}>
    //   <div className={styles.cardImage}>
    //     <img src={image} alt={title} />
    //     <h4>{title}</h4>
    //   </div>
    //   <ul className={styles.cardStack}>
    //     {stack.map((tech, index) => (
    //       <li key={index}>{tech}</li>
    //     ))}
    //   </ul>
    //   <div className={styles.cardLinks}>
    //     <a
    //       className={linkBgClass}
    //       href={github}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Github
    //     </a>
    //     <a
    //       className={linkBgClass2}
    //       href={demo}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Demo
    //     </a>
    //   </div>
    //   <p className={styles.cardDesc}>{description}</p>
    // </div>
  )
}
