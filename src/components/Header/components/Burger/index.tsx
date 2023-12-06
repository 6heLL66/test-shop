import styles from './styles.module.scss'

export const Burger = () => {
  return (
    <div>
      <input className={styles.menu_toggle} type='checkbox' id='toggle' />
      <label className={styles.burger} htmlFor='toggle'>
        <span />
      </label>
      <ul className={styles.menu_box}>
        <li>
          <a className={styles.menu_item} href='#'>
            Profile
          </a>
        </li>
        <li>
          <a className={styles.menu_item} href='#'>
            Products
          </a>
        </li>
        <li>
          <a className={styles.menu_item} href='#'>
            Basket
          </a>
        </li>
        <li>
          <a className={styles.menu_item} href='#'>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
