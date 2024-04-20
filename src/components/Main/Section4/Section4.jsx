import styles from './Section4.module.scss';
import image from '../../../images/93 1.png';
import insta from '../../../images/icons/Instagram - Negative.svg';
import twoGis from '../../../images/icons/2гис 1.svg';

const Section4 = () => {
    return (
        <div id='contact' className={styles.Section4}>
            <img src={image} alt="images" />
            <div className={styles.article}>
                <div className={styles.texts}>
                    <p className={styles.headText}>Мы открыты с 10:00 до 02:00</p>
                    <p>Работаем в будни и выходные дни с 10:00 до <br /> 02:00. Бронируйте столики по телефону: </p>
                    <p className={styles.number}>+996 0220140866</p>
                    <p className={styles.number}>+996 0220140866</p>
                </div>
                <div>
                    <p className={styles.headText}>С нетерпением ждем вас</p>
                    <p>на улице Сухэ-Батора, 17 <br />
                        6-й мк-р, Октябрьский район, столица <br /> Бишкек,</p>
                </div>
                <div className={styles.containers}>
                    <div className={styles.container}>
                        <img src={insta} alt="insta" />
                        <p>@bono.bar.bishkek</p>
                    </div>
                    <div className={styles.container}>
                        <img src={twoGis} alt="twoGis" />
                        <p>ссылка на 2гис</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;