import StackContainer from '../../../stack-containers/StackContainer'
import ButtonLink from '../../../../../links/external-link/ButtonLink'
import styles from './StackBoxFour.module.scss'

function StackBoxFour() {
  return (
    <StackContainer className={`bg-green ${styles.stackBoxFour}`}>
      <ul>
        <li>
          <ButtonLink className='bg-red' href='https://www.figma.com/'>
            Figma
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-violet' href='https://sass-lang.com/'>
            SASS/SCSS
          </ButtonLink>
        </li>
        <li>
          <ButtonLink
            className='bg-yellow'
            href='https://www.framer.com/motion/'
          >
            Framer Motion
          </ButtonLink>
        </li>
        <li>
          <ButtonLink
            className='bg-blue'
            href='https://www.w3schools.com/html/'
          >
            HTML5
          </ButtonLink>
        </li>
        <li>
          <ButtonLink
            className='bg-pink'
            href='https://www.w3schools.com/css/default.asp'
          >
            CSS3
          </ButtonLink>
        </li>
        <li>
          <ButtonLink
            className='bg-orange'
            href='https://www.w3schools.com/js/default.asp'
          >
            JavaScript
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxFour
