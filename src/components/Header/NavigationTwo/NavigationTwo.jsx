import styles from './NavigationTwo.module.scss';
import logo from '../../../images/icons/ьоно 1.svg';
import './Navigation.scss'

const NavigationTwo = ({ sticky, none }) => {
    return (
        <div className={`${styles.NavigationTwo} ${sticky} ${none}`}>
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    <li><a href='#home'>Главная</a></li>
                    <li><a href='#menu'>Меню</a></li>
                    <li>Доставка</li>
                    <li><a href='#onas'>О нас</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default NavigationTwo;
