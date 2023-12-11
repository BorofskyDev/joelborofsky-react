import styles from '../../../styles/layout/sections/FlexSectionWrapper.module.scss'

function FlexColumnSectionWrapper({className, id, children}) {
    const wrapperClasses = `${styles.flexColumnSectionWrapper} ${className || ''}`

  return (
    <section id={id} className={wrapperClasses}>{children}</section>
  )
}
export default FlexColumnSectionWrapper