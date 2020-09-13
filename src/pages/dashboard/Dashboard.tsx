import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './Dashboard.module.scss'

const sn = styleNames(styles)

export const Dashboard: FC = () => {
  const wrapperClasses = sn('dashboard')
  return <main className={wrapperClasses}>Dashboard</main>
}
