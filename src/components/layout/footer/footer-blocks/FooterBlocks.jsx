import MediumContainer from "../../containers/medium-container/MediumContainer"
import style from './FooterBlocks.module.scss'


function FooterBlocks() {
  return (
    <ul className={`${style.footerBlocks} `}>
        <MediumContainer className='bg2'>Developer</MediumContainer>
        <MediumContainer className='bg1'>Designer</MediumContainer>
        <MediumContainer className='bg6'>Business</MediumContainer>
        <MediumContainer className='bg4'>Decent Ole' Chap</MediumContainer>
    </ul>
  )
}
export default FooterBlocks