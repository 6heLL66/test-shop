import { Filter } from '../../../../types/filter'
import { filterFields } from '../../constants'
import styles from './styles.module.scss'

export const FiltersDesktop = () => {
  return (
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
    </div>
  )
}
