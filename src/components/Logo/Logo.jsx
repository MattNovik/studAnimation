import './Logo.scss';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

const Logo = ({ clickSnap }) => {
  return (
    <button
      type="button"
      onClick={(e) => clickSnap(e)}
      data-swiper-slide-index={2}
      className="logo"
    >
      <LogoIcon />
    </button>
  );
};

export default Logo;
