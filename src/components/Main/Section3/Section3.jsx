import styles from './Section3.module.scss';
import play from '../../../images/play.png'

const Section3 = () => {
    
    return (
        <div className={styles.Section3} >
            <div className={styles.section32}>
                <img src={play} alt="play" />
                <div>
                    <p>Оцените лучший ресторан - Бар</p>
                    <p>и проведите время с чутким персоналом которые обслужат вас и ваших гостей в самом лучшем формате!</p>
                </div>
            </div>
        </div>
    );
};

export default Section3;
