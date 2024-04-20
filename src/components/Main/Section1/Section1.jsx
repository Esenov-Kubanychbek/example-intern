import styles from './Section1.module.scss';
import fork from '../../../images/icons/Fork.svg';
import building from '../../../images/icons/Buildings.svg';
import serving from '../../../images/icons/serving.svg'

const Section1 = ({style, image}) => {
    return (
        <div id='onas' className={`${styles.Section1}`} style={style}>

            <img className={styles.image} src={image} alt="images" />
            <div className={styles.texts}>
                <div className={styles.text}>
                    <div>
                        <img src={fork} alt="fork" />
                        <p className={styles.headerText}>Кухня</p>
                    </div>
                    <p>Современной кухни в Бишкеке с исключительным подходом к выбору продуктов. Минимум полуфабрикатов и максимум ручной работы: мы сами замешиваем тесто для пасты, варим сыры, выращиваем зелень и даже делаем свой тоник для коктейлей.</p>
                </div>
                <div className={styles.text}>
                    <div>
                        <img src={building} alt="building" />
                        <p className={styles.headerText}>Заведение</p>
                    </div>
                    <p>Два этажа заведения поделены на семейную зону с открытой кухней и коктейльную зону с барной стойкой, диджеем и просторной террасой.</p>
                </div>
                <div className={styles.text}>
                    <div>
                        <img src={serving} alt="serving" />
                        <p className={styles.headerText}>Бронирование</p>
                    </div>
                    <p>Мы готовы Вам помочь с выбором необходимого для проведения мероприятия или встречи. Подберем для Вас и для Ваших гостей изысканное блюда которые буду соответствовать вашему мероприятию и приятное локация с видом на город.</p>
                </div>
            </div>
        </div>
    )
}

export default Section1