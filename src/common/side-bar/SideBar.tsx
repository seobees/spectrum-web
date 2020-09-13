import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './SideBar.module.scss'
import { Logo, NavItem } from './components'

const sn = styleNames(styles)

export const SideBar: FC = () => {
  const wrapperClasses = sn('side-bar')
  const listClasses = sn('side-bar__list')

  return (
    <aside className={wrapperClasses}>
      <Logo />
      <nav>
        <ul className={listClasses}>
          <li>
            <NavItem to="/dashboard">Dashboard</NavItem>
          </li>
          <li>
            <NavItem to="/some-page">PageSpeed</NavItem>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
