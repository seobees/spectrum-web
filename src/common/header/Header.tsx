import React, { FC } from 'react'
import { Search } from 'ui-kit/molecules'
import { styleNames } from 'libs/style-names'
import styles from './Header.module.scss'

const sn = styleNames(styles)

export const Header: FC = () => {
  const headerClasses = sn('header')
  return (
    <header className={headerClasses}>
      <Search id="header-search" label="Search" placeholder="Search" />
    </header>
  )
}
