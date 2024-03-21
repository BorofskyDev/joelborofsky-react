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
          <ButtonLink className='bg-blue' href='https://nextjs.org/'>
            Nextjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-red' href='https://nodejs.org/en'>
            Nodejs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-orange' href='https://expressjs.com/'>
            Expressjs
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-yellow' href='https://react.dev/'>
            React
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg-green' href='https://www.mongodb.com/'>
            MongoDB
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxOne
