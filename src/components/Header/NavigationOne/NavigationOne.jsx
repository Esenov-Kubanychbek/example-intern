import styles from './NavigationOne.module.scss'
import TwoGis from '../../../images/icons/2гис 1.svg'
import Shape from '../../../images/icons/Shape.svg'
import email from '../../../images/icons/Line.svg'
import instagramm from '../../../images/icons/Instagram - Negative.svg'
const NavigationOne = () => {

  return (
    <div className={styles.NavigationOne}>
      <div className={styles.block1}>
        <div>
          <img src={Shape} alt="twoGis" />
          <p>+996 501 06 55 05</p>
        </div>
        <div>
          <img src={email} alt="email" />
          <p>bono51@gmail.com</p>
        </div>
      </div>
      <div className={styles.block2}>
        <div>
          <img src={instagramm} alt="instagramm" />
          <p>instagram</p>
        </div>
        <div>
          <img src={TwoGis} alt="twoGis" />
          <p>2Gis</p>
        </div>
        <button>Заказать</button>
      </div>
      
    </div>
  )
}

export default NavigationOne
