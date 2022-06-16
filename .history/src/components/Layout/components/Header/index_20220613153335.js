import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
      </div>
      <div className={cx('search')}>
        <input placeholder="Search account" />
      </div>
    </header>
  );
}

export default Header;
