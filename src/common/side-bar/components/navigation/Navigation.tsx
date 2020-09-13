import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import { NavItem } from './nav-item'
import styles from './Navigation.module.scss'

const sn = styleNames(styles)

export const Navigation: FC = () => {
  const listClasses = sn('side-bar__list')

  return (
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
  )
}
