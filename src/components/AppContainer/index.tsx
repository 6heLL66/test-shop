import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

export const AppContainer = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
