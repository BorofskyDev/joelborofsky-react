import styles from '../../../styles/layout/containers/ImageContainer.module.scss'

function ImageContainer({ children, className}) {
  const containerClasses = `${styles.imageContainer} ${className || ''}`

  return (
    <div className={containerClasses}>
        {children}
    </div>
  )
}
export default ImageContainer
