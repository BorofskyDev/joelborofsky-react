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
  iconBg1,
  iconFill1,
  icon1,
  iconBg2,
  iconFill2,
  icon2,
}) {
  const containerClasses = `${styles.imageContainer} ${className || ''}`

  return (
    <div className={`${containerClasses} ${containerBg}`}>
      <JPGImage src={src} alt={alt} className={imageBg} />
      <SmallContainer className={smallContainerBg}>
        {title} <span className='font-handwriting'>{note}</span>
      </SmallContainer>
      <SmallIcon className={`${iconBg1} ${iconFill1}`}>{icon1}</SmallIcon>
      <SmallIcon className={`${iconBg2} ${iconFill2}`}>{icon2}</SmallIcon>
    </div>
  )
}
