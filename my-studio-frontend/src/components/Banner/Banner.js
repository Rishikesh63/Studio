import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/z/online-shopping-e-commerce-concept-banner-background-flat-design-57741893.jpg" alt="slide1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/216/694/small/shopping-trendy-banner-vector.jpg" alt="slide2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/z/branding-ecommerce-sales-website-marketing-flat-design-banner-illustration-showing-online-concept-e-business-to-purchase-103949402.jpg" alt="slide3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

