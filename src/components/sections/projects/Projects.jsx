import SectionTitle from '../../headings/section-title/SectionTitle'
import ProjectCard from './project-card/ProjectCard'
import { icons } from '../../icons/icons'
import firstProjectImg from '../../../assets/img/projects/main-site.jpg'
import secondProjectImg from '../../../assets/img/projects/second-project-image.png'
import styles from './Projects.module.scss'

export default function Projects({ className }) {
  const sectionClasses = `${styles.projects} ${className} || ''`

  return (
    <section id='projects' className={`${sectionClasses}`}>
      <SectionTitle className=' grid-title bg-red'>Projects</SectionTitle>
      <div className={styles.projectsContainer}>
        <ProjectCard
          className='bg-vibrant-blue'
          title='This Site!'
          src={firstProjectImg}
          alt='intro section of this website'
          gitHubHref='https://github.com/BorofskyDev/joelborofsky-react'
          gitHubTitle='Repository for This Site!'
          liveSiteHref='https://joelborofsky.com/'
          liveSiteTitle='This Site (you are already here)!'
          techIcon1={icons.react.path}
          xmlns1={icons.react.xmlns}
          viewBox1={icons.react.viewBox}
          techIcon2={icons.sass.path}
          xmlns2={icons.sass.xmlns}
          viewBox2={icons.sass.viewBox}
          techIcon3={icons.framerMotion.path}
          xmlns3={icons.framerMotion.xmlns}
          viewBox3={icons.framerMotion.viewBox}
          decorativeIcon={icons.cat.path}
          xmlns4={icons.cat.xmlns}
          viewBox4={icons.cat.viewBox}
          iconFill='fill-vibrant-blue'
        />
        <ProjectCard
          className='bg-vibrant-red'
          title='Client Profile Build'
          src={secondProjectImg}
          alt='profile site built for data analyst'
          gitHubHref='https://github.com/BorofskyDev/developer-profile'
          gitHubTitle='Rebekah Fowler'
          liveSiteHref='https://rebekahfowler.com'
          liveSiteTitle='This Site (you are already here)!'
          techIcon1={icons.nextjs.path}
          xmlns1={icons.nextjs.xmlns}
          viewBox1={icons.nextjs.viewBox}
          techIcon2={icons.sass.path}
          xmlns2={icons.sass.xmlns}
          viewBox2={icons.sass.viewBox}
          techIcon3={icons.framerMotion.path}
          xmlns3={icons.framerMotion.xmlns}
          viewBox3={icons.framerMotion.viewBox}
          decorativeIcon={icons.fireHeart.path}
          xmlns4={icons.fireHeart.xmlns}
          viewBox4={icons.fireHeart.viewBox}
          iconFill='fill-vibrant-blue'
        />
      </div>
    </section>
  )
}
