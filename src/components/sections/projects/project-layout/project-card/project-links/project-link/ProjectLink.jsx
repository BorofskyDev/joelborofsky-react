import styles from './ProjectLink.module.scss'

export default function ProjectLink({ linkTitle, href }) {
  return (
    <li className={styles.projectLink}>
      <a href={href} target='_blank'  >{linkTitle}</a>
    </li>
  )
}
