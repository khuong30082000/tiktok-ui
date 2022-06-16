import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({ to, href, onClick, children }) {
  let Comp = 'button';
  const classes = cx('wrapper');
  return <Comp className={classes}>{children}</Comp>;
}

export default Button;
