import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'common/header'
import { SideBar } from 'common/side-bar'
import { SiteMap } from './site-map'

export const Root: FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <SideBar />
      <SiteMap />
    </BrowserRouter>
  </React.StrictMode>
)
