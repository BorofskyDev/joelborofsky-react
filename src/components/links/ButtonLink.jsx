import styles from '../../styles/components/links/ButtonLink.module.scss'

function ButtonLink({ children, className, ...props }) {
  const linkClasses = `${styles.buttonLink} ${className || ''}`

  return (
    <a {...props} className={linkClasses}>
      {children}
    </a>
  )
}
export default ButtonLink
