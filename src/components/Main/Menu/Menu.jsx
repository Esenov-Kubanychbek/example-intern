import styles from './Menu.module.scss';
import menu1 from '../../../images/me (1).png';
import menu2 from '../../../images/me (2).png';
import menu3 from '../../../images/me (3).png';
import menu4 from '../../../images/me (4).png';
import menu5 from '../../../images/me (5).png';
import menu6 from '../../../images/me (6).png';
import menu7 from '../../../images/me (7).png';
import menu8 from '../../../images/me (8).png';

const Menu = () => {
    const menus = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8]
    return (
        <div id='menu' className={styles.Menu}>
            <div>
                <h2>Меню</h2>
                <div className={styles.cards}>
                    {menus.map((menu) => (
                        <div className={styles.card}>
                            <img src={menu} alt="menu" />
                            <p>Японская Кухня</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu;