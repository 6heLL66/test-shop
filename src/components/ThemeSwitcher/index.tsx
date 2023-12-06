import { Theme, useTheme } from '../../contexts/ThemeContext'
import styles from './styles.module.scss'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleSwitcherChange = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)
  }

  return (
    <label className={styles.switcher} htmlFor='toggle_theme'>
      <input
        type='checkbox'
        id='toggle_theme'
        onChange={handleSwitcherChange}
        checked={theme === Theme.Dark}
      />
      <span className={styles.slider}></span>
    </label>
  )
}
