import React, { FC } from 'react'
import { ContentWidget } from 'ui-kit/atoms'
import { styleNames } from 'libs/style-names'
import styles from './Dashboard.module.scss'

const sn = styleNames(styles)

export const Dashboard: FC = () => {
  const wrapperClasses = sn('dashboard')
  const titleClasses = sn('dashboard__title')

  return (
    <section className={wrapperClasses}>
      <h1 className={titleClasses}>Dashboard</h1>
      <ContentWidget title="Pagespeed Index (Desktop)">Content</ContentWidget>
    </section>
  )
}
