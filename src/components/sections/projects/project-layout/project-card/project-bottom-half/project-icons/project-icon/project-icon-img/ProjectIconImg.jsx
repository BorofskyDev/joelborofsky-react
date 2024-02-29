import styles from './ProjectIconImg.module.scss'

export default function ProjectIconImg({ icon, iconFill, iconClasses, viewBox, xmlns}) {
    return (
      <svg viewBox={viewBox} xmlns={xmlns} className={iconClasses}>
        <path d={icon} className={iconFill} />
      </svg>
    )
}