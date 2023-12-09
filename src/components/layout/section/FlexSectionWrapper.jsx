import styles from '../../../styles/layout/sections/FlexSectionWrapper.module.scss'

function FlexSectionWrapper({className, id, children}) {
    const wrapperClasses = `${styles.flexSectionWrapper} ${className || ''}`

  return (
    <section id={id} className={wrapperClasses}>{children}</section>
  )
}
export default FlexSectionWrapper