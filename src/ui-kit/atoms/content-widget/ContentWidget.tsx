import React, { FC, PropsWithChildren } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './ContentWidget.module.scss'

const sn = styleNames(styles)

type Props = Readonly<{
  title?: string
}>

export const ContentWidget: FC<Props> = ({ title, children }: PropsWithChildren<Props>) => {
  const wrapperClasses = sn('content-widget')
  const titleClasses = sn('content-widget__title')
  const bodyClasses = sn('content-widget__body')

  return (
    <section className={wrapperClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <div className={bodyClasses}>{children}</div>
    </section>
  )
}
