import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  outline = false,
  primary = false,
  small = false,
  large = false,
  text = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
