import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
  return <div className={cx('wrapper')}></div>;
}

export default AccountItem;
