import MediumContainer from '../../containers/medium-container/MediumContainer'
import style from './FooterBlocks.module.scss'

function FooterBlocks() {
  return (
    <ul className={`${style.footerBlocks} `}>
      <MediumContainer className='bg-red'>Developer</MediumContainer>
      <MediumContainer className='bg-blue'>Designer</MediumContainer>
      <MediumContainer className='bg-green'>Business</MediumContainer>
      <MediumContainer className='bg-yellow'>Decent Ole' Chap</MediumContainer>
    </ul>
  )
}
export default FooterBlocks
