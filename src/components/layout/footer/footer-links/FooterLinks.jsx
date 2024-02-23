import MediumContainer from '../../containers/medium-container/MediumContainer'
import style from './FooterLinks.module.scss'
import ButtonLink from '../../../links/ButtonLink'

function FooterLinks() {
  return (
    <div className={style.footerLinks}>
      <MediumContainer className='bg2'>
        <span>People That Helped Me Learn</span>
      </MediumContainer>
      <ul>
        <li>
          <ButtonLink href={`#`} className='bg1'>
            Scrimba
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={`#`} className='bg6'>
            Jonas Schmedtmann
          </ButtonLink>
        </li>
        <ButtonLink href={`#`} className='bg2'>
          Bruno Simon
        </ButtonLink>
        <li>
          <ButtonLink href={`#`} className='bg4'>
            WebDev Simplified
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={`#`} className='bg3'>
            Kevin Powell
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default FooterLinks
