import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'common/header'
import { Footer } from 'common/footer'
import { App } from './App'

export const Root: FC = () => (
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)
