import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <svg height="42" width="118" alt="TikTok">
          <use xlink:href="#svg-header-logo"></use>
        </svg>
      </div>
    </header>
  );
}

export default Header;
