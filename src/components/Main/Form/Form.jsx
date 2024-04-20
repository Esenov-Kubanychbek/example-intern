import styles from './Form.module.scss';

const Form = () => {
    return(
        <div id='bron' className={styles.Form}>
            <h2>Бронирование столика</h2>
            <div className={styles.inputs}>
                <div>
                    <label htmlFor="name">ФИО клиента</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="name">Номер клиента</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="clock">Время нахождения</label>
                    <select name="clock" id="clock">
                        <option value="">2 часа</option>
                        <option value="">4 часа</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Время брони</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="name">Количество готсей</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="name">Коментарий</label>
                    <input type="text" name="name" id="name" />
                </div>
                <button>
                    Забронировать столик
                </button>
            </div>
        </div>
    )
}

export default Form;