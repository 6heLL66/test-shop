import { Product } from '../../types/product'
import { ProductPrice } from './components/ProductPrice'

import styles from './styles.module.scss'

interface Props {
  product: Product
  onClick: (id: number) => void
}

export const ProductCard = (props: Props) => {
  const { product } = props

  return (
    <div className={styles.container} onClick={() => props.onClick(product.id)}>
      <img
        alt='product image'
        className={styles.product_image}
        src={product.image}
      />
      <div className={styles.product_info}>
        <div className={styles.product_title}>{product.title}</div>
        <ProductPrice price={product.price} />
        <div className={styles.product_rating}>
          <span>{product.rating.count} sold</span>
          <span>&#11088; {product.rating.rate}</span>
        </div>
      </div>
    </div>
  )
}
