import styles from "./Footer.module.css"


const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p className={styles.copyright}>© 2007 - {currentYear} stroyka-nn.com</p>
                <p className={styles.description}>
                    "ИванСтрой" Интернет-магазин отделочных материалов. Нижний Новгород
                </p>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <a href="#" className={styles.link}>
                            Каталог
                        </a>
                    </li>
                    <li>
                        <a href="#delivery" className={styles.link}>
                            Оплата и доставка
                        </a>
                    </li>
                    <li>
                        <a href="#certificates" className={styles.link}>
                            Сертификаты
                        </a>
                    </li>
                    <li>
                        <a href="#addresses" className={styles.link}>
                            Адреса магазинов
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer