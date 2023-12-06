import { useParams } from 'react-router-dom'
import { Header } from '../Header'
import { useQuery } from 'react-query'

import styles from './styles.module.scss'
import { ProductCard } from '../ProductCard'
import { Product } from '../../types/product'
import { useState } from 'react'
import { ProductDetailsModal } from '../ProductCard/components/ProductDetailsModal'

export const Products = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
  const { category } = useParams()

  const { data: products } = useQuery(['get-products', category], () => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`).then(
      res => res.json(),
    )
  })

  const handleProductClick = (id: number) => {
    const product = products.find((p: Product) => p.id === id)

    setCurrentProduct(product ?? null)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setCurrentProduct(null)
  }

  return (
    <div>
      <Header activeCategory='test' />
      <div className={styles.products_container}>
        {products?.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          )
        })}
      </div>
      {currentProduct && (
        <ProductDetailsModal
          open={modalOpen}
          handleClose={handleModalClose}
          product={currentProduct}
        />
      )}
    </div>
  )
}
