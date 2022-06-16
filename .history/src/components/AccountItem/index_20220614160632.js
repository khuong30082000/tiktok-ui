import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="" alt="hoaa" />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>nguyen van a </span>
        </p>
        <span className={cx('username')}></span>
      </div>
    </div>
  );
}

export default AccountItem;
