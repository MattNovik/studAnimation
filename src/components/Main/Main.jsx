import Menubottom from '../MenuBottom/MenuBottom';
import './Main.scss';
import createScrollSnap from 'scroll-snap';
import { useEffect, useRef, useState } from 'react';
import WhyWe from '../WhyWe/WhyWe';
import OrderPage from '../OrderPage/OrderPage';
import MainPage from '../MainPage/MainPage';
import ReivewsPage from '../ReviewsPage/ReviewsPage';
import HorizontalScroll from 'react-scroll-horizontal';

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

  return (
    <main className="main" ref={ref} onWheel={handleScroll}>
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
