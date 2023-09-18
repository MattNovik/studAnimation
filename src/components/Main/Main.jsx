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
      <ReivewsPage refReview={refReview} />
      <WhyWe refWhy={refWhy} />
      <OrderPage refOrder={refOrder} />
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
