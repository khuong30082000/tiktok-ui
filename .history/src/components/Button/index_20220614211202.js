import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({ to, href, primary, onClick, children }) {
  let Comp = 'button';
  const props = {
    onClick,
  };

  if (to) {
    props.to = to;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper');
  return (
    <Comp className={classes}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
