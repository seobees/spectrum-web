import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { Search } from 'ui-kit/molecules'
import { styleNames } from 'libs/style-names'
import { LanguageSelector, Notifications, User } from './components'
import styles from './Header.module.scss'

const sn = styleNames(styles)

export const Header: FC = () => {
  const headerClasses = sn('header')
  const headerSearchClasses = sn('header__search')
  const [search, setSearch] = useState<string>('')

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  return (
    <header className={headerClasses}>
      <Search
        id="header-search"
        label="Search"
        placeholder="Search"
        value={search}
        className={headerSearchClasses}
        onChange={handleChange}
      />
      <Notifications count={1} />
      <LanguageSelector language="English" country="US" />
      <User userName="Igor Cheliadinski" userRole="Admin" />
    </header>
  )
}
