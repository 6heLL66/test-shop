import styles from './styles.module.scss'

type Props = {
  price: number
}

export const ProductPrice = (props: Props) => {
  const price = props.price.toFixed(2).toString().split('.')

  return (
    <div className={styles.product_price}>
      czk<span className={styles.main_price}>{price[0]}</span>.{price[1]}
    </div>
  )
}
