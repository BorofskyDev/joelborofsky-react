import styles from './ProjectTitle.module.scss'

export default function ProjectTitle({ children }) {
  return <h4 className={styles.projectTitle}>{children}</h4>
}
