import { useEffect, useRef, useState, useMemo } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './scss/index.scss';
import Loader from './components/Loader/Loader';

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
  const refSwiper = useRef(null);
  const refMain = useRef(null);
  const refReview = useRef(null);
  const refWhy = useRef(null);
  const refOrder = useRef(null);
  const refContacts = useRef(null);
  const [activeElem, setACtiveElem] = useState('main');
  const [loaderState, setLoaderState] = useState(true);

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
    /*     if (isElementInViewPort(refMain.current)) {
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
      refSwiper.current.swiper.slideToLoop(3);
    }
  }, [isInViewportReview]);

  useEffect(() => {
    if (isInViewportMain) {
      refSwiper.current.swiper.slideToLoop(2);
    }
  }, [isInViewportMain]);

  useEffect(() => {
    if (isInViewportWhy) {
      refSwiper.current.swiper.slideToLoop(4);
    }
  }, [isInViewportWhy]);

  useEffect(() => {
    if (isInViewportContacts) {
      refSwiper.current.swiper.slideToLoop(6);
    }
  }, [isInViewportContacts]);

  useEffect(() => {
    if (isInViewportOrder) {
      refSwiper.current.swiper.slideToLoop(5);
    }
  }, [isInViewportOrder]);

  useEffect(() => {
    setTimeout(() => {
      setLoaderState(false);
    }, 3000);
  }, []);

  const clickSnap = (e) => {
    let index = e.target.closest('.swiper-slide')
      ? e.target.closest('.swiper-slide').dataset.swiperSlideIndex
      : e.target.closest('.menu-header__item-link')
      ? e.target.closest('.menu-header__item-link').dataset.swiperSlideIndex
      : e.target.closest('.logo')
      ? e.target.closest('.logo').dataset.swiperSlideIndex
      : undefined;
    if (index) {
      console.log(refSwiper.current.swiper);
      refSwiper.current.swiper.slideToLoop(index);
      console.log(index);

      if (index == 3 || index == 8) {
        refReview.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      } else if (index == 4 || index == 9) {
        refWhy.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else if (index == 2 || index == 7) {
        refMain.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else if (index == 0 || index == 5) {
        refOrder.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } else if (index == 1 || index == 6) {
        refContacts.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }

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
        refMain={refMain}
        refReview={refReview}
        refWhy={refWhy}
        refOrder={refOrder}
        refContacts={refContacts}
        handleSnap={handleSnap}
        activeElem={activeElem}
        clickSnap={clickSnap}
      />
    </div>
  );
}

export default App;
