import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './redux/themeSlice'
import languageReducer from './redux/languageSlice'
import App from './App'
import './index.css'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
