import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="" alt="hoaa" />
      <div className={cx('info')}>
        <p className={cx('name')}></p>
      </div>
    </div>
  );
}

export default AccountItem;
