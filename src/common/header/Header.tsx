import React, { FC } from 'react'
import { Input } from 'ui-kit/atoms'
import { styleNames } from 'libs/style-names'
import styles from './Header.module.scss'

const sn = styleNames(styles)

export const Header: FC = () => {
  const headerClasses = sn('header')
  return (
    <header className={headerClasses}>
      <Input id="header-search" label="Search" type="search" placeholder="Search" />
    </header>
  )
}
