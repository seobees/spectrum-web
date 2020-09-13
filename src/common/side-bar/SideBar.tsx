import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './SideBar.module.scss'
import { Logo, Navigation } from './components'

const sn = styleNames(styles)

export const SideBar: FC = () => {
  const wrapperClasses = sn('side-bar')

  return (
    <aside className={wrapperClasses}>
      <Logo />
      <Navigation />
    </aside>
  )
}
