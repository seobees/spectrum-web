import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Dashboard } from 'pages/dashboard'
import { Pagespeed } from 'pages/pagespeed'
import { styleNames } from 'libs/style-names'
import styles from './SiteMap.module.scss'

const sn = styleNames(styles)

export const SiteMap: FC = () => {
  const wrapperClasses = sn('site-map')

  return (
    <main className={wrapperClasses}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/pagespeed" component={Pagespeed} />
        <Redirect to="/dashboard" />
      </Switch>
    </main>
  )
}
