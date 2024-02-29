import styles from './ProjectImage.module.scss'

export default function ProjectImage({ src, alt }) {
  return (
    <div className={styles.projectImage}>
      <img src={src} alt={alt} />
    </div>
  )
}
