import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './Dashboard.module.scss'

const sn = styleNames(styles)

export const Dashboard: FC = () => {
  const wrapperClasses = sn('dashboard')
  const titleClasses = sn('dashboard__title')

  return (
    <main className={wrapperClasses}>
      <h1 className={titleClasses}>Dashboard</h1>
    </main>
  )
}
