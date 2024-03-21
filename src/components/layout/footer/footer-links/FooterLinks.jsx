import MediumContainer from '../../containers/medium-container/MediumContainer'
import style from './FooterLinks.module.scss'
import ButtonLink from '../../../links/external-link/ButtonLink'

function FooterLinks() {
  return (
    <div className={style.footerLinks}>
      <MediumContainer className='bg-orange'>
        <span>People That Helped Me Learn</span>
      </MediumContainer>
      <ul>
        <li>
          <ButtonLink href='https://scrimba.com' className='bg-blue'>
            Scrimba
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href='https://coder-coder.com/' className='bg-red'>
            Coder Coder
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href='https://www.kevinpowell.co/' className='bg-violet'>
            Kevin Powell
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href='https://codingheroes.io/' className='bg-pink'>
            Coding Heroes
          </ButtonLink>
        </li>
        <ButtonLink href='https://bruno-simon.com/' className='bg-green'>
          Bruno Simon
        </ButtonLink>
        <li>
          <ButtonLink
            href='https://courses.webdevsimplified.com/'
            className='bg-yellow'
          >
            WebDev Simplified
          </ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default FooterLinks
