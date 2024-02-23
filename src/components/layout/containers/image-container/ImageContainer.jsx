import SmallIcon from '../../../icons/small-icon/SmallIcon'
import SmallContainer from '../small-container/SmallContainer'
import styles from './ImageContainer.module.scss'
import JPGImage from './JPGImage'

export default function ImageContainer({
  className,
  containerBg,
  src,
  alt,
  imageBg,
  smallContainerBg,
  title,
  note,
  iconBg,
  iconFill,
  icon,
}) {
  const containerClasses = `${styles.imageContainer} ${className || ''}`

  return (
    <div className={`${containerClasses} ${containerBg}`}>
      <JPGImage src={src} alt={alt} className={imageBg} />
      <SmallContainer smallContainerBg={smallContainerBg}>
        {title} <span className='font-handwriting'>{note}</span>
      </SmallContainer>
      <SmallIcon className={`${iconBg} ${iconFill}`}>{icon}</SmallIcon>
      <SmallIcon className={`${iconBg} ${iconFill}`}>{icon}</SmallIcon>
    </div>
  )
}
