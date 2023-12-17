import MediumContainer from '../../containers/MediumContainer'
import style from '../../../../styles/layout/footer/FooterLinks.module.scss'
import ButtonLink from '../../../links/ButtonLink'

function FooterLinks() {
  return (
    <div className={style.footerLinks}>
      <MediumContainer className='bg2'>
        Things That Helped Me Learn
      </MediumContainer>
      <ul>
        <li>
          <ButtonLink href={`#`}>Scrimba</ButtonLink>
          <ButtonLink href={`#`}>Jonas Schmedtmann</ButtonLink>
          <ButtonLink href={`#`}>Bruno Simon</ButtonLink>
          <ButtonLink href={`#`}>WebDev Simplified</ButtonLink>
          <ButtonLink href={`#`}>Kevin Powell</ButtonLink>
        </li>
      </ul>
    </div>
  )
}
export default FooterLinks
