import { useState } from "react"
import callImg from "@/shared/assets/icons/call.png"
import logoImg from "@/shared/assets/icons/Logo.png"
import cartImg from "@/shared/assets/icons/cart.png"
import styles from "./Header.module.css"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
    <header className={styles.header}>
            <div className={styles.fullLogo}>
                <img src={logoImg} alt="logo" className={styles.headerImgLogo}/>
                <div className={styles.nameCompanyWrapper}>
                    <h1 className={styles.highLightText}>ИванСтрой</h1>
                    <h4 className={styles.highLightText}>Магазин отделочных материалов</h4>
                </div>
            </div>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <a href="#">Каталог</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#delivery">Оплата и доставка</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#certificates">Сертификаты</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#addresses">Адреса магазинов</a>
                </li>
                <img src={cartImg} alt="cart" className={styles.headerImg}/>
            </ul>
            <div className={styles.connectionWrapper}>
                <img src={callImg} alt="call" className={styles.headerImg}/>
                <h3 className={styles.highLightText}>+7-905-011-8279</h3>
            </div>

            <div
                className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
                onClick={closeMenu}
            />
            <div
                className={`${styles.navMenuMobile} ${isOpen ? styles.open : ''}`}
                id="mobile-menu"
                >
                <nav className={styles.navMobile} onClick={closeMenu}>
                    <a href="#">Каталог</a>
                    <a href="#delivery">Оплата и доставка</a>
                    <a href="#certificates">Сертификаты</a>
                    <a href="#addresses">Адреса магазинов</a>
                    <h3 className={styles.highLightText}>+7-905-011-8279</h3>
                </nav>
            </div>
            <button
                className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
                type="button"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </header>
    )
}

export default Header