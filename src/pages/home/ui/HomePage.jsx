import Header from "@/widgets/Header"
import Containter from "@/shared/ui/Containter"

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HomePage.module.css';
import Hero from "../../../widgets/Hero";
import Delivery from "../../../widgets/Delivery";
import Certificates from "../../../widgets/Certificates";
import Addresses from "../../../widgets/Adresses";



const HomePage = () => {
    return (
        <>
        <Header />
        <Containter>
            <Hero />
            <Delivery />
            <Certificates />
            <Addresses />
        </Containter>
        </>
    )
}

export default HomePage