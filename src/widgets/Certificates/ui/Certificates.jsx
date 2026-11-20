import { useState } from "react"
import styles from "./Certificates.module.css"
import cert1 from "@/shared/assets/images/certif/cert1.png"
import cert2 from "@/shared/assets/images/certif/cert2.png"
import cert3 from "@/shared/assets/images/certif/cert3.png"
import cert4 from "@/shared/assets/images/certif/cert4.png"

const CERTIFICATES = [
    { id: 1, src: cert1, alt: "Сертификат соответствия" },
    { id: 2, src: cert2, alt: "Санитарно-эпидемиологическое заключение" },
    { id: 3, src: cert3, alt: "Экспертное заключение" },
    { id: 4, src: cert4, alt: "Сертификат соответствия" },
]

const Certificates = () => {
    const [selected, setSelected] = useState(null)

    const closeModal = () => setSelected(null)


    return (
        <section className={styles.certificates} id='certificates'>
            <h2 className={styles.title}>Сертификаты</h2>

            <div className={styles.grid}>
                {CERTIFICATES.map((cert) => (
                    <button
                        key={cert.id}
                        type="button"
                        className={styles.imageButton}
                        onClick={() => setSelected(cert)}
                    >
                        <img src={cert.src} alt={cert.alt} className={styles.image} />
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    className={styles.modal}
                    onClick={closeModal}
                >
                    <button
                        type="button"
                        className={styles.close}
                        onClick={closeModal}
                    >
                        <span></span>
                        <span></span>
                    </button>

                    <img
                        src={selected.src}
                        alt={selected.alt}
                        className={styles.modalImage}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    )
}

export default Certificates