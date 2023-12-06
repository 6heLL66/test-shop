import { Product } from '../../../../types/product'
import { Modal, ModalProps } from '../../../Modal'
import { ProductPrice } from '../ProductPrice'

import styles from './styles.module.scss'

type Props = {
  product: Product
} & ModalProps

export const ProductDetailsModal = (props: Props) => {
  return (
    <Modal open={props.open} handleClose={props.handleClose}>
      <div className={styles.container}>
        <div className={styles.top_info}>
          <img className={styles.image} src={props.product.image} />
          <div className={styles.top_right_info}>
            <div className={styles.info}>
              <span className={styles.info_value}>{props.product.title}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.info_label}>Category:</span>
              <span className={styles.info_value}>
                {props.product.category}
              </span>
            </div>
            <div className={styles.info}>
              <span className={styles.info_label}>Cost:</span>
              <span className={styles.info_value}>
                <ProductPrice price={props.product.price} />
              </span>
            </div>
            <div className={styles.info}>
              <span className={styles.info_label}>Sold:</span>
              <span className={styles.info_value}>
                {props.product.rating.count}
              </span>
            </div>
            <div className={styles.info}>
              <span className={styles.info_label}>Rating:</span>
              <span className={styles.info_value}>
                <span>&#11088; {props.product.rating.rate}</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <span className={styles.info_label}>Description:</span>
          <div className={styles.info_value}>{props.product.description}</div>
        </div>
      </div>
    </Modal>
  )
}
