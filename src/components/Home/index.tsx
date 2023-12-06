import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  useQuery(
    'get-categories',
    () =>
      fetch('https://fakestoreapi.com/products/categories').then(res =>
        res.json(),
      ),
    {
      onSuccess: (data: string[]) => {
        navigate(`/products/${data[0]}`)
      },
    },
  )

  return <div>Loading...</div>
}
