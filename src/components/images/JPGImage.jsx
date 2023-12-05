import styles from '../../styles/layout/containers/ImageContainer.module.scss'

function JPGImage({ src, alt, className}) {
  const imageClasses = `${styles.image} ${className || ''}`


  return <img src={src} alt={alt} className={imageClasses} />
}
export default JPGImage