import { useQuery } from 'react-query'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Burger } from './components/Burger'
import { FilterIcon } from '../../icons/filterIcon'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { FiltersDesktop } from './components/FiltersDesktop'
import { useState } from 'react'
import { FilterModal } from './components/FiltersModal'

interface Props {
  activeCategory: string
}

export const Header = (props: Props) => {
  const navigate = useNavigate()

  const [openFilters, setOpenFilters] = useState(false)

  const { data: categories } = useQuery<string[]>('get-categories', () =>
    fetch('https://fakestoreapi.com/products/categories').then(res =>
      res.json(),
    ),
  )

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/products/${e.currentTarget.value}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_top}>
        <input
          className={styles.search_input}
          type='text'
          placeholder='Search'
        />
        <Burger />
      </div>
      <div className={styles.header_bottom}>
        <div className={styles.category_view}>
          <span className={styles.category_label}>Category:</span>
          <span className={styles.category_value}>
            <select
              className={styles.select}
              defaultValue={props.activeCategory}
              onChange={handleCategoryChange}
            >
              {categories?.map((category: string) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              })}
            </select>
          </span>
        </div>
        <div className={styles.right_container}>
          <FiltersDesktop />
          <ThemeSwitcher />

          <div className={styles.filter} onClick={() => setOpenFilters(true)}>
            <FilterIcon size={16} />
            <span>filter</span>
          </div>
        </div>
      </div>
      <FilterModal
        open={openFilters}
        handleClose={() => setOpenFilters(false)}
      />
    </div>
  )
}
