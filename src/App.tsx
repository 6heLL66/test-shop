import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Products } from './components/Products'
import { AppContainer } from './components/AppContainer'

import './styles/styles.scss'
import { ThemeProvider } from './contexts/ThemeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, cacheTime: 0 },
  },
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope)
    })
    .catch(function (error) {
      console.error('Error while Service Worker register:', error)
    })
}

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Routes>
            <Route path='' element={<AppContainer />}>
              <Route path='/' element={<Home />} />
              <Route path='/products/:category' element={<Products />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
