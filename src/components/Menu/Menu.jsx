import './Menu.scss';
import { MENU_LIST } from '../../data/data';

const Menu = ({ clickSnap }) => {
  return (
    <div className="menu-header">
      <div className="menu-header__list-wrapper">
        <ul className="menu-header__list">
          {MENU_LIST && MENU_LIST.length
            ? MENU_LIST.map((item, index) => (
                <li className="menu-header__item" key={index}>
                  <button
                    type="button"
                    onClick={(e) => clickSnap(e)}
                    className="menu-header__item-link"
                    data-swiper-slide-index={item.link}
                    header-text={item.name}
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              ))
            : null}
        </ul>
      </div>
      <div className="menu-header__button-wrappers">
        <button className="menu-header__button-enter">ВХОД</button>
      </div>
    </div>
  );
};

export default Menu;
