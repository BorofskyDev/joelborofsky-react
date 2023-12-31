import StackContainer from '../stack-containers/StackContainer'
import styles from '../../../../styles/components/sections/stack/stack-boxes/StackBoxFour.module.scss'
import ButtonLink from '../../../links/ButtonLink'

function StackBoxFour() {
  return (
    <StackContainer className={`bg2 ${styles.stackBoxFour}`}>
      
      <ul>
        <li>
          <ButtonLink className='bg5' href='#'>
            TailwindCss
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg3' href='#'>
            Styled Components
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg4' href='#'>
            Framer Motion
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg1' href='#'>
            Threejs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg6' href='#'>
            React Three Fiber
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg5' href='#'>
            Drei
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxFour
