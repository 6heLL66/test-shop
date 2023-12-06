import { Filter } from '../../../../types/filter'
import { Modal, ModalProps } from '../../../Modal'
import { filterFields } from '../../constants'

import styles from './styles.module.scss'

export const FilterModal = (props: ModalProps) => {
  return (
    <Modal open={props.open} handleClose={props.handleClose}>
      <div className={styles.container}>
        {filterFields.map((filter: Filter) => {
          return (
            <div className={styles.filter_view} key={filter.label}>
              <div>{filter.label}:</div>
              <select className={styles.select}>
                {filter.options.map(option => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </div>
          )
        })}
        <button className={styles.apply} onClick={props.handleClose}>
          Apply filters
        </button>
      </div>
    </Modal>
  )
}
