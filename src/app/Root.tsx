import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'common/header'
import { Footer } from 'common/footer'
import { SideBar } from 'common/side-bar'
import { SiteMap } from './site-map'

export const Root: FC = () => (
  <React.StrictMode>
    <Header />
    <SideBar />
    <BrowserRouter>
      <SiteMap />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)
