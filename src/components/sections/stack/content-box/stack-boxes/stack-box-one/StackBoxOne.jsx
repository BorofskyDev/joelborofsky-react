import StackContainer from '../../../stack-containers/StackContainer'
import SectionTitle from '../../../../../headings/section-title/SectionTitle'
import ButtonLink from '../../../../../links/external-link/ButtonLink'
import styles from './StackBoxOne.module.scss'

function StackBoxOne() {
  return (
    <StackContainer className={`bg6 ${styles.stackBoxOne}`}>
      <SectionTitle className='bg4'>Stack</SectionTitle>
      <ul>
        <li>
          <ButtonLink className='bg1' href='#'>
            Nextjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg2' href='#'>
            Nodejs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg3' href='#'>
            Expressjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg4' href='#'>
            React
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg5' href='#'>
            MongoDB
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxOne
