import styles from './ImageContainer.module.scss'

function ImageContainer({ children, className}) {
  const containerClasses = `${styles.imageContainer} ${className || ''}`

  return (
    <div className={containerClasses}>
        {children}
    </div>
  )
}
export default ImageContainer
