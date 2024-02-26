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
  xmlns1,
  viewBox1,
  iconBg2,
  xmlns2,
  viewBox2,
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
      <SmallIcon className={`${iconBg1} ${iconFill1} `} position='left' icon={icon1} xmlns={xmlns1} viewBox={viewBox1} iconFill={iconFill1} />
      <SmallIcon className={`${iconBg2} ${iconFill2} `} position='right' icon={icon2} xmlns={xmlns2} viewBox={viewBox2} iconFill={iconFill2} />
    </div>
  )
}
