import { createPortal } from 'react-dom'
import styles from './styles.module.scss'
import { useTheme } from '../../contexts/ThemeContext'

export type ModalProps = {
  open: boolean
  handleClose: () => void
}
type Props = ModalProps & React.PropsWithChildren

export const Modal = (props: Props) => {
  const { theme } = useTheme()

  const handleOutClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget !== e.target) {
      return
    }
    props.handleClose()
  }

  if (!props.open) {
    return null
  }

  return createPortal(
    <div
      className={styles.container + ` theme--${theme}`}
      onClick={handleOutClick}
    >
      <div className='modal_content'>{props.children}</div>
    </div>,
    document.body,
  )
}
