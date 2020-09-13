import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './Pagespeed.module.scss'

const sn = styleNames(styles)

export const Pagespeed: FC = () => {
  const wrapperClasses = sn('pagespeed')
  const titleClasses = sn('pagespeed__title')

  return (
    <section className={wrapperClasses}>
      <h1 className={titleClasses}>PageSpeed</h1>
    </section>
  )
}
