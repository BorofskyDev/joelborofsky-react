import StackContainer from '../../../stack-containers/StackContainer'
import SectionTitle from '../../../../../headings/section-title/SectionTitle'
import ButtonLink from '../../../../../links/external-link/ButtonLink'
import styles from './StackBoxOne.module.scss'

function StackBoxOne() {
  return (
    <StackContainer className={`bg-pink ${styles.stackBoxOne}`}>
      <SectionTitle className='bg-yellow'>Stack</SectionTitle>
      <ul>
        <li>
          <ButtonLink className='bg-blue' href='#'>
            Nextjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-red' href='#'>
            Nodejs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-violet' href='#'>
            Expressjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='#'>
            React
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-green' href='#'>
            MongoDB
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxOne
