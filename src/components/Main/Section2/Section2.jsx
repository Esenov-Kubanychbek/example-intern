import {  useState } from 'react';
import styles from './Section2.module.scss';
import arrow from '../../../images/icons/strel.svg';
import img1 from '../../../images/IMG (1).png';
import img2 from '../../../images/IMG (3).png';
import img3 from '../../../images/IMG (5).png';
import img4 from '../../../images/IMG (4).png';
import img5 from '../../../images/IMG (5).png';
import img6 from '../../../images/IMG (4).png';

const Section2 = () => {
    const imgs = [img1, img3, img4, img5, img6, img2];
    const [currentIndex, setCurrentIndex] = useState(1);


    const movePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ?imgs.length - 1 : prevIndex - 1));
    };

    const moveNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.Section2} >
            <div className={styles.arrows}>
                <img  src={arrow} alt="arrow" onClick={() => {
                    movePrev()
                }}/>
                <h2>Фотогалерея</h2>
                <img src={arrow} alt="arrow" onClick={() => {
                    moveNext()
                }}/>
            </div>
            <div className={styles.images} style={{transform: `translateX(-${currentIndex * 416}px)`}}>
                {imgs.map((img) => (
                        <img className={styles.img} src={img} alt='img' />
                ))}
            </div>

            


        </div>
    );
};

export default Section2;
