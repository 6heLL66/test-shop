import { Theme } from "../contexts/ThemeContext"

export const getThemeFromLocalStorage = (): Theme => {
  const theme = localStorage.getItem('theme') as Theme

  return theme ?? Theme.Light
}

export const setThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem('theme', theme)
}