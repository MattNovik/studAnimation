import './WhyWe.scss';
import { ReactComponent as IconSmallStar } from '../../assets/images/svg/four-star.svg';
import { ReactComponent as IconFourFlower } from '../../assets/images/svg/four-flower.svg';
import { ReactComponent as IconSmile } from '../../assets/images/svg/full-smile.svg';
import { ReactComponent as IconWaves } from '../../assets/images/svg/double-wave.svg';
import { ReactComponent as IconArrow } from '../../assets/images/svg/circled-arrow.svg';
import { ReactComponent as IconBigStar } from '../../assets/images/svg/four-long-star.svg';
import { ReactComponent as IconSmallArrow } from '../../assets/images/svg/small-arrow.svg';

const WhyWe = ({ refWhy }) => {
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
        <div className="why-we__item why-we__item--quality">
          <p className="why-we__item-quality-text">
            <span className="why-we__item-quality-text-first">
              {'Качество\n'}
            </span>
            {'Тройная проверка -\n гарантия успеха'}
          </p>
          <IconSmallStar className="why-we__item-quality-star" />
        </div>
        <div className="why-we__item  why-we__item--clever">
          <IconFourFlower />
        </div>
        <div className="why-we__item  why-we__item--smile">
          <IconSmile />
        </div>
        <div className="why-we__item  why-we__item--expe">
          <span className="why-we__item-expe-text-big">{'Опыт '}</span>
          <span className="why-we__item-expe-text-small">
            Работаем с 2004г.
          </span>
        </div>
        <div className="why-we__item  why-we__item--waves">
          <IconWaves />
        </div>
        <div className="why-we__item  why-we__item--hopefully">
          <p className="why-we__item-hopefully-first-text">Надежность</p>
          <p className="why-we__item-hopefully-second-text">Сопровождаем вас</p>
          <p className="why-we__item-hopefully-third-text">до сдачи</p>
        </div>
        <div className="why-we__item why-we__item--arrow">
          <IconArrow />
        </div>
        <div className="why-we__item why-we__item--support">
          <p className="why-we__item-support-text">
            <span className="why-we__item-support-text-first">
              {'Поддержка\n'}
            </span>
            {'Круглосуточная\n служба ответит\n на любые\n вопросы'}
          </p>
        </div>
        <div className="why-we__item why-we__item--green-clever">
          <IconFourFlower />
        </div>
        <div className="why-we__item why-we__item--star">
          <IconBigStar />
        </div>
        <div className="why-we__item why-we__item--docs">
          <p className="why-we__item-docs-text">
            <span className="why-we__item-docs-text-first">
              {'Официальный договор\n'}
            </span>
            {'и кассовый чек - все по закону'}
          </p>
        </div>
        <div className="why-we__item why-we__item--punctuality">
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
