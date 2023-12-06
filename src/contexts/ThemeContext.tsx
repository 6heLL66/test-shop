import React, { useState } from 'react'
import {
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from '../utils/theme'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (x: Theme) => void
}>({ theme: getThemeFromLocalStorage(), setTheme: () => {} })

export const ThemeProvider = (props: React.PropsWithChildren) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())

  const changeTheme = (_theme: Theme) => {
    setTheme(_theme)
    setThemeToLocalStorage(_theme)
  }

  const background = theme === Theme.Dark ? '#000' : '#fff'

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      <div
        className={`theme--${theme}`}
        style={{ minHeight: '100vh', background }}
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  return context
}
