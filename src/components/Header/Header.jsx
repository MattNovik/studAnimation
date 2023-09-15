import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Header.scss';

const Header = ({ clickSnap }) => {
  return (
    <header className="header">
      <Logo clickSnap={clickSnap} />
      <Menu clickSnap={clickSnap} />
    </header>
  );
};

export default Header;
