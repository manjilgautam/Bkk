import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro"> 
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{
              backgroundImage: `url('/images/back_2.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px', // Increase the height
            }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>DEBMINSTHA</h2>
                {/* Add a button or link if needed */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{
              backgroundImage: `url('/images/back_1.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px', // Increase the height
            }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Straight Out of Nepal</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{
              backgroundImage: `url('/images/back_4.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px', // Increase the height
            }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Nepali Flavor</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
};

export default PageIntro