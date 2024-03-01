import MediumHeader from '../../../headings/medium-header/MediumHeader'
import ButtonLink from '../../../links/external-link/ButtonLink'
import birdAttorney from '../../../../assets/img/profile/kyiv-bird-cutout2.png'
import { icons } from '../../../icons/icons'
import styles from './ContactLinks.module.scss'
import ImageContainer from '../../../layout/containers/image-container/ImageContainer'

function ContactLinks() {
  return (
    <div className={`${styles.contactLinks} `}>
      <ImageContainer
        containerBg='bg-blue'
        src={birdAttorney}
        alt='Joel with a falcon on his shoulder and two birds on his right arm'
        imageBg='bg-vibrant-purple'
        smallContainerBg='bg-violet'
        title="Bird Attorney"
        note="not a bird attorney"
        iconBg1='bg-vibrant-green'
        iconFill1='fill-vibrant-purple'
        icon1={icons.dinosaur.path}
        xmlns1={icons.dinosaur.xmlns}
        viewBox1={icons.dinosaur.viewBox}
        iconBg2='bg-vibrant-red'
        iconFill2='fill-vibrant-purple'
        icon2={icons.fireHeart.path}
        xmlns2={icons.fireHeart.xmlns}
        viewBox2={icons.fireHeart.viewBox}
      />
      <MediumHeader className='bg-light'>
        Find me on the world wide web!
      </MediumHeader>
      <ul>
        <li>
          <ButtonLink className='bg-red' href='#'>
            My GitHub
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='#'>
            My CodePen
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-pink' href='#'>
            My LinkedIn
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-blue' href='#'>
            My Freelance Site
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-green' href='#'>
            My Email
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default ContactLinks
