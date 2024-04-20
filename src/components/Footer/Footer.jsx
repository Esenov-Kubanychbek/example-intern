import styles from './Footer.module.scss';
import logo from '../../images/icons/ьоно 1.svg';
import vv from '../../images/Frame 1116606869.png';
import insta from '../../images/icons/Instagram - Negative.svg';
import tg from '../../images/icons/Subtract.svg';
import facebook from '../../images/icons/Vector.svg';
import tt from '../../images/icons/Vector (1).svg';
import youtibe from '../../images/icons/Vector (2).svg';

const Footer = () => {
    return(
        <div className={styles.Footer}>
            <section className={styles.section1}>
                <article>
                    <img src={logo} alt="logo" />
                    <img src={vv} alt="vv" />
                </article>
                <article>
                    <h3>/Адрес:</h3>
                    <p>карта 2гис <br /> карта Google <br /> Доставка</p>
                </article>
                <article>
                <h3>/Позвоните нам:</h3>
                    <p>+996 501 06 55 05 <br /> +996 501 06 55 05 <br /> +996 501 06 55 05</p>
                </article>
                <article>
                <h3>/Пишите нам:</h3>
                    <p>боно2gmail.com <br /> боно2gmail.com<br /> боно2gmail.com</p>
                </article>
                <article>
                <h3>/ Навигация по страницам:</h3>
                    <ul>
                        <li><a href="#home"> Главный экран</a></li>
                        <li><a href="#onas">О нас</a></li>
                        <li><a href="#menu">Меню</a></li>
                        <li><a href="#contact"> Контакты</a></li>
                        <li><a href="#bron">Бронсь столика</a></li>
                    </ul>
                </article>
            </section><hr />
            <section className={styles.section2}>
                <p>© 2024 год, Bono bar . Все права защищены. </p>
                <img src={insta} alt="insta" />
                <img src={tg} alt="tg" />
                <img src={facebook} alt="facebook" />
                <img src={tt} alt="tt" />
                <img src={youtibe} alt="youtube" />
            </section>
        </div>
    )
}

export default Footer;