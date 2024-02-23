import styles from './StackContainer.module.scss'

function StackContainer({ children, className }) {
  const containerClasses = `${styles.stackContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
export default StackContainer
