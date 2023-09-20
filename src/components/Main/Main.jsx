import Menubottom from '../MenuBottom/MenuBottom';
import './Main.scss';
import createScrollSnap from 'scroll-snap';
import { useEffect, useRef, useState } from 'react';
import WhyWe from '../WhyWe/WhyWe';
import OrderPage from '../OrderPage/OrderPage';
import MainPage from '../MainPage/MainPage';
import ReivewsPage from '../ReviewsPage/ReviewsPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';

const mainData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Main = ({
  refSwiper,
  refMain,
  refMainSwiper,
  refReview,
  refWhy,
  refOrder,
  refContacts,
  handleSnap,
  clickSnap,
  activeElem,
  setActiveSlideIndexBottom,
  isInViewportWhy = { isInViewportWhy },
}) => {
  const regTransitRight = useRef();
  const regTransitLeft = useRef();
  const ref = useRef(null);
  const refContainer = useRef(null);
  const [scrollState, setScrollState] = useState(false);

  const bindScrollSnap = () => {
    const element = ref.current;
    createScrollSnap(
      element,
      {
        snapDestinationX: '100%',
        timeout: 800,
        duration: 1000,
        threshold: 0.2,
      },
      () => handleSnap()
    );
  };

  const handleScroll = (event) => {
    if (!scrollState && !event.target.closest('.swiper')) {
      const container = event.target.closest('.main');
      container.scrollTo({
        top: 0,
        left:
          event.deltaY > 0
            ? container.scrollLeft + window.innerWidth
            : container.scrollLeft - window.innerWidth,
      });

      setScrollState(true);
    }
    setTimeout(() => {
      setScrollState(false);
    }, 500);
  };

  const handleWheelRightToLeft = () => {
    regTransitRight.current.classList.remove(
      'main__wrapper-block-transition-right-to-left--active'
    );
    setTimeout(() => {
      regTransitRight.current.classList.add(
        'main__wrapper-block-transition-right-to-left--active'
      );
    }, 0);

    setTimeout(() => {
      regTransitRight.current.classList.remove(
        'main__wrapper-block-transition-right-to-left--active'
      );
    }, 1300);
  };

  const handleWheelLeftToRight = () => {
    regTransitLeft.current.classList.remove(
      'main__wrapper-block-transition-left-to-right--active'
    );
    setTimeout(() => {
      regTransitLeft.current.classList.add(
        'main__wrapper-block-transition-left-to-right--active'
      );
    }, 0);

    setTimeout(() => {
      regTransitLeft.current.classList.remove(
        'main__wrapper-block-transition-left-to-right--active'
      );
    }, 1300);
  };

  return (
    <main className="main" ref={ref} /* onWheel={handleScroll} */>
      <div className="main__wrapper">
        <div
          className="main__wrapper-block-transition-right-to-left"
          ref={regTransitRight}
        ></div>
        <div
          className="main__wrapper-block-transition-left-to-right"
          ref={regTransitLeft}
        ></div>
        <Swiper
          ref={refMainSwiper}
          spaceBetween={0}
          speed={2000}
          loop={true}
          modules={[Virtual, Mousewheel]}
          onSlideChange={(swiper) => {
            handleSnap();
          }}
          onScroll={(swiper, event) => {
            console.log(event.wheelDeltaY);
            if (event.wheelDeltaY < 0) {
              handleWheelRightToLeft();
            } else {
              handleWheelLeftToRight();
            }
          }}
          slidesPerView={1}
          mousewheel={true}
          className="main__list"
        >
          <SwiperSlide className="main__slide">
            {({ isActive, isPrev, isNext }) => (
              <li
                className={
                  isActive
                    ? 'main__list-item main__list-item--active'
                    : isPrev || isNext
                    ? 'main__list-item main__list-item--near'
                    : 'main__list-item'
                }
              >
                <MainPage refMain={refMain} />
              </li>
            )}
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            {({ isActive, isPrev, isNext }) => (
              <li
                className={
                  isActive
                    ? 'main__list-item main__list-item--active'
                    : isPrev || isNext
                    ? 'main__list-item main__list-item--near'
                    : 'main__list-item'
                }
              >
                <ReivewsPage refReview={refReview} />
              </li>
            )}
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            {({ isActive, isPrev, isNext }) => (
              <li
                className={
                  isActive
                    ? 'main__list-item main__list-item--active'
                    : isPrev || isNext
                    ? 'main__list-item main__list-item--near'
                    : 'main__list-item'
                }
              >
                <WhyWe refWhy={refWhy} isInViewportWhy={isInViewportWhy} />
              </li>
            )}
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            {({ isActive, isPrev, isNext }) => (
              <li
                className={
                  isActive
                    ? 'main__list-item main__list-item--active'
                    : isPrev || isNext
                    ? 'main__list-item main__list-item--near'
                    : 'main__list-item'
                }
              >
                <OrderPage refOrder={refOrder} />
              </li>
            )}
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            {({ isActive, isPrev, isNext }) => (
              <li
                className={
                  isActive
                    ? 'main__list-item main__list-item--active'
                    : isPrev || isNext
                    ? 'main__list-item main__list-item--near'
                    : 'main__list-item'
                }
              >
                <section
                  className="main__item"
                  ref={refContacts}
                  data-elemes="contacts"
                  key="5"
                >
                  Контакты
                </section>
              </li>
            )}
          </SwiperSlide>
          {/*           {mainData.map((item, index) => {
            if (index === 0 || index === 5) {
              return (
                <SwiperSlide
                  virtualIndex={index}
                  key={item}
                  className="main__slide"
                >
                  {({ isActive, isPrev, isNext }) => (
                    <li
                      className={
                        isActive
                          ? 'main__list-item main__list-item--active'
                          : isPrev || isNext
                          ? 'main__list-item main__list-item--near'
                          : 'main__list-item'
                      }
                    >
                      <MainPage refMain={refMain} />
                    </li>
                  )}
                </SwiperSlide>
              );
            } else if (index === 1 || index === 6) {
              return (
                <SwiperSlide
                  virtualIndex={index}
                  key={item}
                  className="main__slide"
                >
                  {({ isActive, isPrev, isNext }) => (
                    <li
                      className={
                        isActive
                          ? 'main__list-item main__list-item--active'
                          : isPrev || isNext
                          ? 'main__list-item main__list-item--near'
                          : 'main__list-item'
                      }
                    >
                      <ReivewsPage refReview={refReview} />
                    </li>
                  )}
                </SwiperSlide>
              );
            } else if (index === 2 || index === 7) {
              return (
                <SwiperSlide
                  virtualIndex={index}
                  key={item}
                  className="main__slide"
                >
                  {({ isActive, isPrev, isNext }) => (
                    <li
                      className={
                        isActive
                          ? 'main__list-item main__list-item--active'
                          : isPrev || isNext
                          ? 'main__list-item main__list-item--near'
                          : 'main__list-item'
                      }
                    >
                      <WhyWe refWhy={refWhy} />
                    </li>
                  )}
                </SwiperSlide>
              );
            } else if (index === 3 || index === 8) {
              return (
                <SwiperSlide
                  virtualIndex={index}
                  key={item}
                  className="main__slide"
                >
                  {({ isActive, isPrev, isNext }) => (
                    <li
                      className={
                        isActive
                          ? 'main__list-item main__list-item--active'
                          : isPrev || isNext
                          ? 'main__list-item main__list-item--near'
                          : 'main__list-item'
                      }
                    >
                      <OrderPage refOrder={refOrder} />
                    </li>
                  )}
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide
                  virtualIndex={index}
                  key={item}
                  className="main__slide"
                >
                  {({ isActive, isPrev, isNext }) => (
                    <li
                      className={
                        isActive
                          ? 'main__list-item main__list-item--active'
                          : isPrev || isNext
                          ? 'main__list-item main__list-item--near'
                          : 'main__list-item'
                      }
                    >
                      <section
                        className="main__item"
                        ref={refContacts}
                        data-elemes="contacts"
                        key="5"
                      >
                        Контакты
                      </section>
                    </li>
                  )}
                </SwiperSlide>
              );
            }
          })} */}
        </Swiper>
      </div>
      <Menubottom
        setActiveSlideIndexBottom={setActiveSlideIndexBottom}
        refSwiper={refSwiper}
        activeElem={activeElem}
        clickSnap={clickSnap}
      />
    </main>
  );
};

export default Main;
