import Header from "@/widgets/Header"
import Containter from "@/shared/ui/Containter"

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HomePage.module.css';
import Hero from "../../../widgets/Hero";
import Delivery from "../../../widgets/Delivery";
import Certificates from "../../../widgets/Certificates";
import Addresses from "../../../widgets/Adresses";
import Footer from "../../../widgets/Footer";



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
        <Footer />
        </>
    )
}

export default HomePage