function Menu() {
  return (
    <Tippy
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <button className={cx('more-btn')}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
    </Tippy>
  );
}

export default Menu;
