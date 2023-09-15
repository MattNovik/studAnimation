import Menubottom from '../MenuBottom/MenuBottom';
import './Main.scss';
import createScrollSnap from 'scroll-snap';
import { useEffect, useRef, useState } from 'react';
import WhyWe from '../WhyWe/WhyWe';
import OrderPage from '../OrderPage/OrderPage';
import MainPage from '../MainPage/MainPage';
import ReivewsPage from '../ReviewsPage/ReviewsPage';

const Main = ({
  refSwiper,
  refMain,
  refReview,
  refWhy,
  refOrder,
  refContacts,
  handleSnap,
  clickSnap,
  activeElem,
}) => {
  const ref = useRef(null);

  const bindScrollSnap = () => {
    const element = ref.current;
    createScrollSnap(
      element,
      {
        snapDestinationY: '95%',
        timeout: 800,
        duration: 1000,
        threshold: 0.2,
      },
      () => handleSnap()
    );
  };

  useEffect(() => {
    bindScrollSnap();
  }, []);

  return (
    <main className="main" ref={ref}>
      <MainPage refMain={refMain} />
      {/* <section className="main__item" ref={refMain} data-elemes="main" key="1">
        Главная
      </section> */}
      <ReivewsPage refReview={refReview} />
      {/* <section
        className="main__item"
        ref={refReview}
        data-elemes="reviews"
        key="2"
      >
        Отзывы
      </section> */}
      <WhyWe refWhy={refWhy} />
      {/* <section className="main__item" ref={refWhy} data-elemes="why" key="3">
        Почему мы
      </section> */}
      <OrderPage refOrder={refOrder} />
      {/* <section
        className="main__item"
        ref={refOrder}
        data-elemes="order"
        key="4"
      >
        Заявка
      </section> */}
      <section
        className="main__item"
        ref={refContacts}
        data-elemes="contacts"
        key="5"
      >
        Контакты
      </section>
      <Menubottom
        refSwiper={refSwiper}
        activeElem={activeElem}
        clickSnap={clickSnap}
      />
    </main>
  );
};

export default Main;
