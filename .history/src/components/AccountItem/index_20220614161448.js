import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_100x100.jpeg?x-expires=1655370000&x-signature=vT3cbRGaR7IihwZZXZuYA2MMmss%3D"
        alt="hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>nguyen van a </span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>abc</span>
      </div>
    </div>
  );
}

export default AccountItem;
