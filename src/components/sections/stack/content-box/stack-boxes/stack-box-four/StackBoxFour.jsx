import StackContainer from '../../../stack-containers/StackContainer'
import ButtonLink from '../../../../../links/external-link/ButtonLink'
import styles from './StackBoxFour.module.scss'

function StackBoxFour() {
  return (
    <StackContainer className={`bg-green ${styles.stackBoxFour}`}>
      <ul>
        <li>
          <ButtonLink className='bg-red' href='#'>
            Figma
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-violet' href='#'>
            SASS/SCSS
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='#'>
            Framer Motion
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-blue' href='#'>
            HTML5 (Babel)
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-pink' href='#'>
            CSS3
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-orange' href='#'>
            JavaScript
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxFour
