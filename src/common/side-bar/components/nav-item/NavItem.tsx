import React, { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { styleNames } from 'libs/style-names'
import styles from './NavItem.module.scss'

const sn = styleNames(styles)

type Props = {
  to: string
}

export const NavItem: FC<Props> = ({ to, children }: PropsWithChildren<Props>) => {
  const navItemClasses = sn('nav-item')
  const activeClassName = sn('nav-item--active')

  return (
    <NavLink to={to} className={navItemClasses} activeClassName={activeClassName}>
      {children}
    </NavLink>
  )
}
