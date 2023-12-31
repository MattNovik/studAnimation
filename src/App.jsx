import { useEffect, useRef, useState, useMemo } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './scss/index.scss';
import Loader from './components/Loader/Loader';

const listIndexLoopTo = {
  0: 3, //order
  1: 4, //contacts
  2: 0, //main
  3: 1, //reviews
  4: 2, //why-we
  5: 3, //order
  6: 4, //contacts
  7: 0, //main
  8: 1, //reviews
  9: 2, //why-we
  10: 3, //order
  11: 4, //contacts
  12: 0, //main
  13: 1, //reviews
  14: 2, //why-we
  15: 3, //order
  16: 4, //contacts
  17: 0, //main
  18: 1, //reviews
  19: 2, //why-we
};

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};

function App() {
  const refMainSwiper = useRef(null);
  const refSwiper = useRef(null);
  const refMain = useRef(null);
  const refReview = useRef(null);
  const refWhy = useRef(null);
  const refOrder = useRef(null);
  const refContacts = useRef(null);
  const [activeElem, setACtiveElem] = useState('main');
  const [loaderState, setLoaderState] = useState(true);
  const [activeSlideIndexBottom, setActiveSlideIndexBottom] = useState(2);

  const isInViewportMain = useIntersection(refMain, '-100px');
  const isInViewportReview = useIntersection(refReview, '-100px');
  const isInViewportWhy = useIntersection(refWhy, '-100px');
  const isInViewportOrder = useIntersection(refOrder, '-100px');
  const isInViewportContacts = useIntersection(refContacts, '-100px');

  /*   console.log('isInViewportMain:' + ' ' + isInViewportMain);
  console.log('isInViewportReview:' + ' ' + isInViewportReview);
  console.log('isInViewportWhy:' + ' ' + isInViewportWhy);
  console.log('isInViewportOrder:' + ' ' + isInViewportOrder);
  console.log('isInViewportContacts:' + ' ' + isInViewportContacts); */

  /*   function isElementInViewPort(element) {
    let rect = element.getBoundingClientRect();
    // get the height of the window
    let viewPortBottom =
      window.innerHeight || document.documentElement.clientHeight;
    // get the width of the window
    let viewPortRight =
      window.innerWidth || document.documentElement.clientWidth;

    let isTopInViewPort = rect.top >= 0,
      isLeftInViewPort = rect.left >= 0,
      isBottomInViewPort = rect.bottom <= viewPortBottom,
      isRightInViewPort = rect.right <= viewPortRight;

    // check if element is completely visible inside the viewport
    return (
      isTopInViewPort &&
      isLeftInViewPort &&
      isBottomInViewPort &&
      isRightInViewPort
    );
  } */
  const handleSnap = () => {
    /* if (isElementInViewPort(refMain.current)) {
      refSwiper.current.swiper.slideToLoop(2);
    } else if (isElementInViewPort(refReview.current)) {
      refSwiper.current.swiper.slideToLoop(3);
    } else if (isElementInViewPort(refWhy.current)) {
      refSwiper.current.swiper.slideToLoop(4);
    } else if (isElementInViewPort(refOrder.current)) {
      refSwiper.current.swiper.slideToLoop(5);
    } */
  };

  useEffect(() => {
    if (isInViewportReview) {
      console.log(activeSlideIndexBottom);
      refSwiper.current.swiper.slideToLoop(
        activeSlideIndexBottom % 5 === 0 && activeSlideIndexBottom !== 25
          ? 3 + (activeSlideIndexBottom / 5 - 1) * 5
          : (activeSlideIndexBottom - 2) % 5 === 0 &&
            activeSlideIndexBottom !== 25
          ? 3 + ((activeSlideIndexBottom - 2) / 5 - 1) * 5
          : 3
      );
    }
  }, [isInViewportReview]);

  useEffect(() => {
    if (isInViewportMain) {
      console.log(activeSlideIndexBottom);
      refSwiper.current.swiper.slideToLoop(
        (activeSlideIndexBottom - 4) % 5 === 0
          ? 2 + ((activeSlideIndexBottom - 4) / 5) * 5
          : (activeSlideIndexBottom - 6) % 5 === 0
          ? 2 + ((activeSlideIndexBottom - 6) / 5) * 5
          : 2
      );
    }
  }, [isInViewportMain]);

  useEffect(() => {
    if (isInViewportWhy) {
      console.log(activeSlideIndexBottom);
      refSwiper.current.swiper.slideToLoop(
        (activeSlideIndexBottom - 1) % 5 === 0
          ? 4 + ((activeSlideIndexBottom - 1) / 5 - 1) * 5
          : (activeSlideIndexBottom - 3) % 5 === 0
          ? 4 + ((activeSlideIndexBottom - 3) / 5 - 1) * 5
          : 4
      );
    }
  }, [isInViewportWhy]);

  useEffect(() => {
    if (isInViewportContacts) {
      console.log(activeSlideIndexBottom);
      refSwiper.current.swiper.slideToLoop(
        (activeSlideIndexBottom - 3) % 5 === 0
          ? 6 + ((activeSlideIndexBottom - 3) / 5 - 1) * 5
          : (activeSlideIndexBottom - 5) % 5 === 0
          ? 6 + ((activeSlideIndexBottom - 5) / 5 - 1) * 5
          : 6
      );
    }
  }, [isInViewportContacts]);

  useEffect(() => {
    if (isInViewportOrder) {
      console.log(activeSlideIndexBottom);
      refSwiper.current.swiper.slideToLoop(
        (activeSlideIndexBottom - 2) % 5 === 0
          ? 5 + ((activeSlideIndexBottom - 2) / 5 - 1) * 5
          : (activeSlideIndexBottom - 4) % 5 === 0
          ? 5 + ((activeSlideIndexBottom - 4) / 5 - 1) * 5
          : 5
      );
    }
  }, [isInViewportOrder]);

  useEffect(() => {
    setTimeout(() => {
      setLoaderState(false);
    }, 3000);
  }, []);

  const clickSnap = (e) => {
    console.log(refSwiper.current.swiper);
    let index = e.target.closest('.swiper-slide')
      ? e.target.closest('.swiper-slide').dataset.swiperSlideIndex
      : e.target.closest('.menu-header__item-link')
      ? e.target.closest('.menu-header__item-link').dataset.swiperSlideIndex
      : e.target.closest('.logo')
      ? e.target.closest('.logo').dataset.swiperSlideIndex
      : undefined;
    if (index) {
      refMainSwiper.current.swiper.slideToLoop(listIndexLoopTo[index]);

      if (refSwiper.current.swiper.previousIndex > index) {
        refSwiper.current.swiper.loopFix('right');
      } else {
        refSwiper.current.swiper.loopFix('left');
      }
    }
  };

  return (
    <div className={loaderState ? 'App App--loading' : 'App'}>
      <Loader />
      <Header clickSnap={clickSnap} />
      <Main
        refSwiper={refSwiper}
        refMainSwiper={refMainSwiper}
        refMain={refMain}
        refReview={refReview}
        refWhy={refWhy}
        refOrder={refOrder}
        refContacts={refContacts}
        handleSnap={handleSnap}
        activeElem={activeElem}
        clickSnap={clickSnap}
        setActiveSlideIndexBottom={setActiveSlideIndexBottom}
        isInViewportWhy={isInViewportWhy}
      />
    </div>
  );
}

export default App;
