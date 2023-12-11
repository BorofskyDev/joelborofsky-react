import React from 'react'
import styles from '../../../styles/layout/Banner.module.scss'

const Banner = React.forwardRef((props, ref) => {
  return (
    <div className={styles.banner} ref={ref}>
      <h1>Joel Borofsky</h1>
    </div>
  )
})

export default Banner
