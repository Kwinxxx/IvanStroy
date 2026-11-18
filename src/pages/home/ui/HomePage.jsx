import styles from "./HomePage.module.css"
import callImg from "@/shared/assets/icons/call.png"
import logoImg from "@/shared/assets/icons/Logo.png"
import cartImg from "@/shared/assets/icons/cart.png"
import { useState } from "react"

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    const closeMenu = () => {
        setIsOpen(false)
    }


    return (
        <>
            <header className={styles.header}>
                <div className={styles.fullLogo}>
                    <img src={logoImg} alt="logo" className={styles.headerImgLogo}/>
                    <div className={styles.nameCompanyWrapper}>
                        <h1 className={styles.highLightText}>ИванСтрой</h1>
                        <h4 className={styles.highLightText}>Магазин отделочных материалов</h4>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <div>Каталог</div>
                    <div>Оплата и доставка</div>
                    <div>Сертификаты</div>
                    <div>Адреса магазинов</div>
                    <img src={cartImg} alt="cart" className={styles.headerImg}/>
                </nav>
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
                        <div>Каталог</div>
                        <div>Оплата и доставка</div>
                        <div>Сертификаты</div>
                        <div>Адреса магазинов</div>
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
        </>
    )
}

export default HomePage