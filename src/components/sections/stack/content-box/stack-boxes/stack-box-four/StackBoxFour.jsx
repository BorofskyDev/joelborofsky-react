import StackContainer from '../../../stack-containers/StackContainer'
import ButtonLink from '../../../../../links/external-link/ButtonLink'
import styles from './StackBoxFour.module.scss'

function StackBoxFour() {
  return (
    <StackContainer className={`bg-red ${styles.stackBoxFour}`}>
      <ul>
        <li>
          <ButtonLink className='bg-green' href='#'>
            TailwindCss
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-violet' href='#'>
            Styled Components
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='#'>
            Framer Motion
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-blue' href='#'>
            Threejs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-pink' href='#'>
            React Three Fiber
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-green' href='#'>
            Drei
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxFour
