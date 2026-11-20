import Header from "@/widgets/Header"
import Containter from "@/shared/ui/Containter"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HomePage.module.css';

import img1 from '../../../shared/assets/images/slider/image1.jpg';
import img2 from '../../../shared/assets/images/slider/image2.png';
import img3 from '../../../shared/assets/images/slider/image3.png';

const HomePage = () => {

    const slides = [
        {
            id: 1,
            title: "Товары для отделки потолка",
            mainPicture: img1,
            breadCrumbs: ['Реечные потолки', 'Плинтуса потолочные', 'Плиты из пенопласта', 'Панели ПВХ', 'Багеты из пенопласта']
        },
        {
            id: 2,
            title: "Товары для отделки потолка1",
            mainPicture: img2,
            breadCrumbs: ['Реечные потолки1', 'Плинтуса потолочные', 'Плиты из пенопласта1', 'Панели ПВХ1', 'Багеты из пенопласта1']
        },
        {
            id: 3,
            title: "Товары для отделки потолка2",
            mainPicture: img3,
            breadCrumbs: ['Реечные потолки2', 'Плинтуса потолочные2', 'Плиты из пенопласта2', 'Панели ПВХ2', 'Багеты из пенопласта2']
        },
    ]


    const [paginationEl, setPaginationEl] = useState(null);
    return (
        <>
        <Header />
        <Containter>
            <section className={styles.heroSection}>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{
                        el: paginationEl,
                        clickable: true
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className={styles.slideCard}>
                                <img className={styles.slideImg} src={slide.mainPicture} alt="img" />
                                <h1 className={styles.slideTitle}>{slide.title}</h1>
                                <div className={styles.slideCrumbs}>
                                {slide.breadCrumbs.map((crumb) => (
                                    <span className={styles.slideCrumb}>{crumb}</span>
                                ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={setPaginationEl} className={styles.customPagination}></div>
            </section>
        </Containter>
        </>
    )
}

export default HomePage