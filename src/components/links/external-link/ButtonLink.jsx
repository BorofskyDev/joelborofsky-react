import styles from './ButtonLink.module.scss'

function ButtonLink({ children, className, ...props }) {
  const linkClasses = `${styles.buttonLink} ${className || ''}`

  return (
    <a {...props} className={linkClasses} target='_blank'>
      {children}
    </a>
  )
}
export default ButtonLink
