import styles from "./Addresses.module.css"

const MAP_URL =
    "https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3ANNouX6UyqmQO35GqFwVVQTAGLmc_FWbe"

const LOCATIONS = [
    {
        id: "sovetsky",
        title: "Нагорная часть города (Советский р-он)",
        address:
            "603136 Нижний Новгород ул.Композитора Касьянова, 6г, Кузнечиха-2, ТЦ «Форум» (радиорынок), ангар 3, павильоны 94-96. Все образцы панелей выставлены в павильонах 38-39.",
        hours: "ежедневно с 9:00 до 16:00, в воскресенье до 15:00",
    },
    {
        id: "avtozavod",
        title: 'Автозаводский район "Ярмарка на Минеева"',
        address:
            'ул.Минеева д.29а, вход с противоположной стороны "Бригадира", дверь слева от "Садовода".',
        hours: "ежедневно с 09:00 до 17:00, в воскресенье до 16:00.",
    },
]

const Addresses = () => {
    return (
        <section className={styles.addresses} id="addresses">
            <h1 className={styles.title}>Адреса торговых павильонов</h1>

            <div className={styles.list}>
                {LOCATIONS.map(({ id, title, address, hours }) => (
                    <div key={id} className={styles.item}>
                        <h3 className={styles.name}>{title}</h3>
                        <p className={styles.text}>
                            <span className={styles.label}>АДРЕС:</span> {address}
                        </p>
                        <p className={styles.text}>
                            <b>Время работы</b>:
                            <br />
                            {hours}
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.mapWrapper}>
                <iframe
                    src={MAP_URL}
                    title="Карта торговых павильонов"
                    className={styles.map}
                    loading="lazy"
                    allowFullScreen
                    allow="geolocation"
                />
            </div>
        </section>
    )
}

export default Addresses