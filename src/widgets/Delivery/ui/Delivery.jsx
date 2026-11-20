
import styles from './Delivery.module.css'

import homeImg from '@/shared/assets/icons/home.png'
import geoImg from '@/shared/assets/icons/geo.png'
import globalImg from '@/shared/assets/icons/global.png'
import carImg from '@/shared/assets/icons/car.png'

const Delivery = () => {

    const CARDS = [
    {
        id: "nn",
        title: "Доставка по Нижнему Новгороду",
        icon: homeImg,
        text: <p>Сроки и стоимость доставки договорные</p>,
    },
    {
        id: "region",
        title: "Доставка по Нижегородской области",
        icon: homeImg,
        text: <p>1-5 рабочих дней, стоимость рассчитывается индивидуально.</p>,
    },
    {
        id: "russia",
        title: "Доставка по России",
        icon: globalImg,
        wide: true,
        text: (
            <>
                <p>Через ТК “Деловые линии”, “Байкал”, почтой, EMS или любой другой на выбор покупателя.</p>
                <p>
                    Стоимость доставки <b>бесплатная до терминала ТК</b> + тариф ТК. Доставку осуществляем по
                    пятницам или индивидуально. Услуги по доставке транспортными компаниями клиент оплачивает
                    самостоятельно.
                </p>
                <p>После отправки покупателю предоставляется номер накладной ТК для самостоятельного отслеживания груза.</p>
                <p>
                    <b><i>100% предоплата товара!!!</i></b>
                    <br />
                    Для юридических лиц выставляется счет, для физических оплата на Сберкарту или р/с организации.
                </p>
                <p>Вместе с товаром высылаются все необходимые документы: товарный чек, накладная, счет-фактура.</p>
            </>
        ),
    },
    {
        id: "flat",
        title: "Доставка в квартиру",
        icon: geoImg,
        text: (
            <p>
                По-умолчанию мы доставляем товар только до подъезда. Дополнительные услуги грузчика обговариваются
                отдельно и оплачиваются непосредственно водителю.
            </p>
        ),
    },
    {
        id: "pickup",
        title: "Самовывоз (бесплатно)",
        icon: carImg,
        text: (
            <p>
                1-3 рабочих дня, после подтверждения оператором резервирования товара на складе.
            </p>
        ),
    },
    ]

    return (
        <section className={styles.delivery}>
                <div className={styles.grid}>
                    { CARDS.map(({id, title, icon, text, wide}) => (
                        <article
                            key={id}
                            className={`${styles.card} ${wide ? styles.cardWide : ""}`}
                        >
                            <h3>{title}</h3>
                            <img src={icon} alt="icon" className={styles.icon} />
                            <div className={styles.text}>{text}</div>
                        </article>
                    )) }
                </div>
            </section>
    )
}

export default Delivery