import Header from "@/widgets/Header"
import Containter from "@/shared/ui/Containter"

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HomePage.module.css';
import Hero from "../../../widgets/Hero";

const HomePage = () => {



    return (
        <>
        <Header />
        <Containter>
            <Hero />
        </Containter>
        </>
    )
}

export default HomePage