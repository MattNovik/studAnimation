import './ReviewsPage.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import { useRef } from 'react';
import WrittenText from '../../assets/images/help-written@2x.png';
import NiceReview from '../../assets/images/nice-review@2x.png';
import FirsImage from '../../assets/images/review-first@2x.png';
import { ReactComponent as IconArrow } from '../../assets/images/svg/arro.svg';

const reviewsData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const ReivewsPage = ({ refReview }) => {
  const refSwiperReview = useRef(null);
  return (
    <section
      className="main__item reviews-page"
      ref={refReview}
      data-elemes="reviews"
      key="2"
    >
      <div className="reviews-page__wrapper">
        <Swiper
          ref={refSwiperReview}
          spaceBetween={-100}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Virtual, Navigation, Mousewheel, Autoplay]}
          slidesPerView={1.7}
          effect="coverflow"
          mousewheel={true}
          navigation={{
            nextEl: '.reviews-page__button-next',
            prevEl: '.reviews-page__button-prev',
          }}
          centeredSlides={true}
          /*           onSlideChange={() => console.log('slide change')} */
          onSwiper={(swiper) => swiper.slideToLoop(2)}
          virtual
          className="reviews-page__list"
        >
          {reviewsData.map((item, index) => (
            <SwiperSlide
              virtualIndex={index}
              key={item}
              className="reviews-page__slide"
            >
              {({ isActive, isPrev, isNext }) => (
                <li
                  className={
                    isActive
                      ? 'reviews-page__list-item reviews-page__list-item--active'
                      : isPrev || isNext
                      ? 'reviews-page__list-item reviews-page__list-item--near'
                      : 'reviews-page__list-item'
                  }
                >
                  <p className="reviews-page__item-name">ОЛЬГА</p>
                  <img
                    src={WrittenText}
                    alt="written-text"
                    className="reviews-page__item-written-text"
                  />
                  <div className="reviews-page__item-info">
                    <img
                      src={NiceReview}
                      alt="nice-review"
                      className="reviews-page__item-nice-review"
                    />
                    <p className="reviews-page__item-text">
                      {
                        'Студсервис спасли с очень срочной контрольной по высшей математике( Самой сделать нереально. Попросила, чтобы решение сделали с подробным объяснением чтобы хоть как-то понимать как решалось и не опростоволоситься на зачете. Препод похвалили и зачет теперь у меня «в кармане». Огромное спасибо!'
                      }
                    </p>
                  </div>

                  <img
                    src={FirsImage}
                    alt="first-image"
                    className="reviews-page__item-first-image"
                  />
                </li>
              )}
            </SwiperSlide>
          ))}
          <div className="reviews-page__custom-navigation">
            <button className="reviews-page__button-prev" type="button">
              <IconArrow />
            </button>
            <button className="reviews-page__button-next" type="button">
              <IconArrow />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReivewsPage;
