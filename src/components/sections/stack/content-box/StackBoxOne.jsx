import StackContainer from '../stack-containers/StackContainer'
import styles from '../../../../styles/components/sections/stack/stack-boxes/StackBoxOne.module.scss'
import SectionTitle from '../../../headings/SectionTitle'
import ButtonLink from '../../../links/ButtonLink'

function StackBoxOne() {
  return (
    <StackContainer className={`bg6 ${styles.stackBoxOne}`}>
      <SectionTitle className='bg4'>Stack</SectionTitle>
      <ul>
        <li>
          <ButtonLink className='bg1' href='#'>
            HTML
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg2' href='#'>
            CSS
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg3' href='#'>
            JavaScript
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg4' href='#'>
            React
          </ButtonLink>
        </li>
        <li>
          <ButtonLink className='bg5' href='#'>
            Nextjs
          </ButtonLink>
        </li>
      </ul>
    </StackContainer>
  )
}
export default StackBoxOne
