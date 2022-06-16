import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import images from '~/assets/images';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  outline = false,
  primary = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  cross = false,
  rounded = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //remove event listener when button disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

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
    text,
    disable,
    cross,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {cross && <img src={images.cross} alt="cross" />}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
