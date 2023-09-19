import './WhyWe.scss';
import { useRef, useEffect } from 'react';
import { ReactComponent as IconSmallStar } from '../../assets/images/svg/four-star.svg';
import { ReactComponent as IconFourFlower } from '../../assets/images/svg/four-flower.svg';
import { ReactComponent as IconSmile } from '../../assets/images/svg/full-smile.svg';
import { ReactComponent as IconWaves } from '../../assets/images/svg/double-wave.svg';
import { ReactComponent as IconArrow } from '../../assets/images/svg/circled-arrow.svg';
import { ReactComponent as IconBigStar } from '../../assets/images/svg/four-long-star.svg';
import { ReactComponent as IconSmallArrow } from '../../assets/images/svg/small-arrow.svg';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const WhyWe = ({ refWhy }) => {
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);
  const refFourh = useRef(null);
  const refFifth = useRef(null);
  const refSix = useRef(null);
  const refSevens = useRef(null);
  const refEight = useRef(null);
  const refNine = useRef(null);
  const refTen = useRef(null);
  const refEleven = useRef(null);
  const refTwelve = useRef(null);

  function debounce(f, ms) {
    let isCooldown = false;

    return function () {
      if (isCooldown) return;

      f.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => (isCooldown = false), ms);
    };
  }

  const movingFunc = (event, object, speed) => {
    var X = Math.floor(event.pageX / speed - 20) + 'px';
    var Y = Math.floor(event.pageY / speed) + 'px';
    object.style.transform = 'translate3d(' + X + ' , ' + Y + ' , ' + 0 + ')';
  };

  const debouncedFunc = debounce(movingFunc, 20);

  const movingQuality = (object, speed) => {
    refWhy.current.addEventListener('mousemove', (event) => {
      var X = Math.floor(event.pageX / speed - 17) + 'px';
      var Y = Math.floor(event.pageY / speed) + 'px';
      object.style.transform =
        'translate3d(' + X + ' , ' + Y + ' , ' + 0 + ') rotate(6deg)';
    });
  };

  const movingSimple = (object, speed) => {
    refWhy.current.addEventListener('mousemove', (event) => {
      var X = Math.floor(event.pageX / speed - 25) + 'px';
      var Y = Math.floor(event.pageY / speed) + 'px';
      object.style.transform = 'translate3d(' + X + ' , ' + Y + ' , ' + 0 + ')';
    });
  };

  const movingHopefully = (object, speed) => {
    refWhy.current.addEventListener('mousemove', (event) => {
      var X = Math.floor(event.pageX / speed - 15) + 'px';
      var Y = Math.floor(event.pageY / speed) + 'px';
      object.style.transform =
        'translate3d(' + X + ' , ' + Y + ' , ' + 0 + ') rotate(-4.669deg)';
    });
  };

  const movingSupport = (object, speed) => {
    refWhy.current.addEventListener('mousemove', (event) => {
      var X = Math.floor(event.pageX / speed - 10) + 'px';
      var Y = Math.floor(event.pageY / speed) + 'px';
      object.style.transform =
        'translate3d(' + X + ' , calc(-50% + ' + Y + ') , ' + 0 + ')';
    });
  };

  const movingPunctuality = (object, speed) => {
    refWhy.current.addEventListener('mousemove', (event) => {
      var X = Math.floor(event.pageX / speed - 20) + 'px';
      var Y = Math.floor(event.pageY / speed) + 'px';
      object.style.transform =
        'translate3d(' + X + ' , ' + Y + ' , ' + 0 + ') rotate(8.512deg)';
    });
  };

  useEffect(() => {
    movingQuality(refFirst.current, getRandomNumber(50, 80));
    movingSimple(refSecond.current, getRandomNumber(70, 90));
    movingSimple(refThird.current, getRandomNumber(40, 50));
    movingSimple(refFourh.current, getRandomNumber(50, 90));
    movingSimple(refFifth.current, getRandomNumber(70, 100));
    movingHopefully(refSix.current, getRandomNumber(60, 70));
    movingSimple(refSevens.current, getRandomNumber(80, 90));
    movingSupport(refEight.current, getRandomNumber(40, 80));
    movingSimple(refNine.current, getRandomNumber(40, 75));
    movingSimple(refTen.current, getRandomNumber(55, 110));
    movingSimple(refEleven.current, getRandomNumber(70, 80));
    movingPunctuality(refTwelve.current, getRandomNumber(50, 70));
  }, []);

  return (
    <section
      className="main__item why-we"
      ref={refWhy}
      data-elemes="why"
      key="3"
    >
      <h2 className="why-we__title">Почему мы?</h2>
      <p className="why-we__help-title">
        Каждый день наши преподаватели помогают тысячам студентов учиться лучше
      </p>
      <div className="why-we__wrapper-blocks">
        <div className="why-we__item why-we__item--quality" ref={refFirst}>
          <p className="why-we__item-quality-text">
            <span className="why-we__item-quality-text-first">
              {'Качество\n'}
            </span>
            {'Тройная проверка -\n гарантия успеха'}
          </p>
          <IconSmallStar className="why-we__item-quality-star" />
        </div>
        <div className="why-we__item  why-we__item--clever" ref={refSecond}>
          <IconFourFlower />
        </div>
        <div className="why-we__item  why-we__item--smile" ref={refThird}>
          <IconSmile />
        </div>
        <div className="why-we__item  why-we__item--expe" ref={refFourh}>
          <span className="why-we__item-expe-text-big">{'Опыт '}</span>
          <span className="why-we__item-expe-text-small">
            Работаем с 2004г.
          </span>
        </div>
        <div className="why-we__item  why-we__item--waves" ref={refFifth}>
          <IconWaves />
        </div>
        <div className="why-we__item  why-we__item--hopefully" ref={refSix}>
          <p className="why-we__item-hopefully-first-text">Надежность</p>
          <p className="why-we__item-hopefully-second-text">Сопровождаем вас</p>
          <p className="why-we__item-hopefully-third-text">до сдачи</p>
        </div>
        <div className="why-we__item why-we__item--arrow" ref={refSevens}>
          <IconArrow />
        </div>
        <div className="why-we__item why-we__item--support" ref={refEight}>
          <p className="why-we__item-support-text">
            <span className="why-we__item-support-text-first">
              {'Поддержка\n'}
            </span>
            {'Круглосуточная\n служба ответит\n на любые\n вопросы'}
          </p>
        </div>
        <div className="why-we__item why-we__item--green-clever" ref={refNine}>
          <IconFourFlower />
        </div>
        <div className="why-we__item why-we__item--star" ref={refTen}>
          <IconBigStar />
        </div>
        <div className="why-we__item why-we__item--docs" ref={refEleven}>
          <p className="why-we__item-docs-text">
            <span className="why-we__item-docs-text-first">
              {'Официальный договор\n'}
            </span>
            {'и кассовый чек - все по закону'}
          </p>
        </div>
        <div className="why-we__item why-we__item--punctuality" ref={refTwelve}>
          <p className="why-we__item-punctualit-text">
            <span className="why-we__item-punctualit-text-first">
              {'Пунктуальность\n'}
            </span>
            {'Персональный менеджер\n контролирует соблюдение сроков'}
          </p>
          <div className="why-we__item-punctuality-arrows">
            <IconSmallArrow />
            <IconSmallArrow />
            <IconSmallArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
