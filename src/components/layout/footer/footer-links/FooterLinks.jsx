import MediumContainer from '../../containers/medium-container/MediumContainer'
import style from './FooterLinks.module.scss'
import ButtonLink from '../../../links/external-link/ButtonLink'

function FooterLinks() {
  return (
    <div className={style.footerLinks}>
      <MediumContainer className='bg-red'>
        <span>People That Helped Me Learn</span>
      </MediumContainer>
      <ul>
        <li>
          <ButtonLink href={`#`} className='bg-blue'>
            Scrimba
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={`#`} className='bg-pink'>
            Jonas Schmedtmann
          </ButtonLink>
        </li>
        <ButtonLink href={`#`} className='bg-red'>
          Bruno Simon
        </ButtonLink>
        <li>
          <ButtonLink href={`#`} className='bg-yellow'>
            WebDev Simplified
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={`#`} className='bg-violet'>
            Kevin Powell
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default FooterLinks
