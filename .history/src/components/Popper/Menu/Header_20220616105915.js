import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Header({title,onBack}) {
    return ( <header className={cx('header')} );
}

export default Header;