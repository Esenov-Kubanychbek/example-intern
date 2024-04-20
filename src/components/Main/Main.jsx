import styles from './Main.module.scss';
import Section1 from './Section1/Section1';
import image from '../../images/image1.png';
import image2 from '../../images/images2.png';
import Menu from './Menu/Menu';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Form from './Form/Form';

const Main = () => {
    const styless = {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginLeft: '-50px'
        
    }
    return(
        <div className={styles.Main}>
            <Section1 image={image}/>
            <Section1 image={image2} style={styless}/>
            <Menu/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Form />
        </div>
    )
}

export default Main;