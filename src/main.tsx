import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './Pages/App'
import { store } from './Store'
import { BrowserRouter } from 'react-router-dom'
import ToogleThemeButton from './Components/ToogleThemeButton'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToogleThemeButton />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
