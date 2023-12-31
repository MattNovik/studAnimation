import './MenuBottom.scss';
import { ReactComponent as IconSmile } from '../../assets/images/svg/smile.svg';
import { ReactComponent as IconStar } from '../../assets/images/svg/four-star.svg';
import { ReactComponent as IconFlower } from '../../assets/images/svg/four-flower.svg';
import { ReactComponent as IconRounStar } from '../../assets/images/svg/round-four-star.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';

const sliderData = [
  'slider1',
  'slider2',
  'slider3',
  'slider4',
  'slider5',
  'slider6',
  'slider7',
  'slider8',
  'slider9',
  'slider10',
  'slider11',
  'slider12',
  'slider13',
  'slider14',
  'slider15',
  'slider16',
  'slider17',
  'slider18',
  'slider19',
  'slider20',
];

const Menubottom = ({
  setActiveSlideIndexBottom,
  refSwiper,
  activeElem,
  clickSnap,
}) => {
  return (
    <div className="menu-bottom">
      <Swiper
        ref={refSwiper}
        spaceBetween={0}
        speed={100}
        loop={true}
        modules={[Virtual]}
        slidesPerView={5}
        effect="coverflow"
        centeredSlides={true}
        onSlideChange={(swiper) => {
          setActiveSlideIndexBottom(swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          setActiveSlideIndexBottom(2);
          swiper.slideToLoop(2);
        }}
        shortSwipes={false}
        virtual
        allowTouchMove={false}
        className="menu-bottom__list"
      >
        {sliderData.map((item, index) => {
          if (index === 0 || index === 5 || index === 10 || index === 15) {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={item}
                onClick={(e) => clickSnap(e)}
              >
                {({ isActive, isPrev, isNext }) => (
                  <li
                    className={
                      isActive
                        ? 'menu-bottom__list-item menu-bottom__list-item--order menu-bottom__list-item--active'
                        : isPrev || isNext
                        ? 'menu-bottom__list-item menu-bottom__list-item--first menu-bottom__list-item--order'
                        : 'menu-bottom__list-item menu-bottom__list-item--order'
                    }
                  >
                    <span className="menu-bottom__list-item-text menu-bottom__list-item-text--order">
                      Заявка
                    </span>
                  </li>
                )}
              </SwiperSlide>
            );
          } else if (
            index === 1 ||
            index === 6 ||
            index === 11 ||
            index === 16
          ) {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={item}
                onClick={(e) => clickSnap(e)}
              >
                {({ isActive, isPrev, isNext }) => (
                  <li
                    className={
                      isActive
                        ? 'menu-bottom__list-item menu-bottom__list-item--contacts menu-bottom__list-item--active'
                        : isPrev || isNext
                        ? 'menu-bottom__list-item menu-bottom__list-item--first  menu-bottom__list-item--contacts'
                        : 'menu-bottom__list-item menu-bottom__list-item--contacts'
                    }
                  >
                    <span className="menu-bottom__list-item-text menu-bottom__list-item-text--contacts">
                      Контакты
                    </span>
                    <IconSmile className="menu-bottom__item-icon menu-bottom__item-icon--contacts" />
                  </li>
                )}
              </SwiperSlide>
            );
          } else if (
            index === 2 ||
            index === 7 ||
            index === 12 ||
            index === 17
          ) {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={item}
                onClick={(e) => clickSnap(e)}
              >
                {({ isActive, isPrev, isNext }) => (
                  <li
                    className={
                      isActive
                        ? 'menu-bottom__list-item  menu-bottom__list-item--main menu-bottom__list-item--active'
                        : isPrev || isNext
                        ? 'menu-bottom__list-item menu-bottom__list-item--first  menu-bottom__list-item--main'
                        : 'menu-bottom__list-item menu-bottom__list-item--main'
                    }
                  >
                    <span className="menu-bottom__list-item-text menu-bottom__list-item-text--main">
                      Главная
                    </span>
                    <IconStar className="menu-bottom__item-icon menu-bottom__item-icon--main menu-bottom__item-icon--first" />
                    <IconFlower className="menu-bottom__item-icon menu-bottom__item-icon--main menu-bottom__item-icon--second" />
                  </li>
                )}
              </SwiperSlide>
            );
          } else if (
            index === 3 ||
            index === 8 ||
            index === 13 ||
            index === 18
          ) {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={item}
                onClick={(e) => clickSnap(e)}
              >
                {({ isActive, isPrev, isNext }) => (
                  <li
                    className={
                      isActive
                        ? 'menu-bottom__list-item  menu-bottom__list-item--reviews menu-bottom__list-item--active'
                        : isPrev || isNext
                        ? 'menu-bottom__list-item  menu-bottom__list-item--first  menu-bottom__list-item--reviews'
                        : 'menu-bottom__list-item  menu-bottom__list-item--reviews'
                    }
                  >
                    <span className="menu-bottom__list-item-text menu-bottom__list-item-text--reviews">
                      Отзывы
                    </span>
                    <IconRounStar className="menu-bottom__item-icon menu-bottom__item-icon--reviews" />
                  </li>
                )}
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={item}
                onClick={(e) => clickSnap(e)}
              >
                {({ isActive, isPrev, isNext }) => (
                  <li
                    className={
                      isActive
                        ? 'menu-bottom__list-item menu-bottom__list-item--why menu-bottom__list-item--active'
                        : isPrev || isNext
                        ? 'menu-bottom__list-item menu-bottom__list-item--first menu-bottom__list-item--why'
                        : 'menu-bottom__list-item  menu-bottom__list-item--why'
                    }
                  >
                    <span className="menu-bottom__list-item-text menu-bottom__list-item-text--why">
                      {'Почему\n мы?'}
                    </span>
                  </li>
                )}
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default Menubottom;
