import styles from './Header.module.scss';
import NavigationOne from './NavigationOne/NavigationOne';
import NavigationTwo from './NavigationTwo/NavigationTwo';
import trigger from '../../images/icons/trigger.svg';
import arrow from '../../images/icons/strel.svg';
const Header = () => {
  return (
    <div id='home' className={styles.Header}>
      <NavigationOne />
      <hr />
      <NavigationTwo none='none'/>
      <div className={styles.main}>
        <img src={arrow} alt="arrow" />
        <div className ={styles.mainText}>
          <p>Выделяесь среди других</p>
          <div className={styles.headerText}><span>bono -</span> Коктейльный бар и ресторан приглашает к себе</div>
        </div>
        <img src={arrow} alt="arrow" />
      </div>
      <button className={styles.btn}>Забронировать столик</button>
      <img className={styles.trigger} src={trigger} alt="trigger" />
      <div className={styles.rectangle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
