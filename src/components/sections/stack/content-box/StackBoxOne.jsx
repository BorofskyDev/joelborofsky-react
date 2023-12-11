import StackContainer from "../stack-containers/StackContainer";
import styles from '../../../../styles/components/sections/stack/stack-boxes/StackBoxOne.module.scss'
import SectionTitle from "../../../headings/SectionTitle";

function StackBoxOne() {
  return (
    <StackContainer className={styles.stackBoxOne} >
        <SectionTitle className='bg4'>Stack</SectionTitle>
        
    </StackContainer>
  )
}
export default StackBoxOne