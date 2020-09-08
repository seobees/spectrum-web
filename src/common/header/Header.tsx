import React, { FC } from 'react'
import { Input } from 'ui-kit/atoms'
import styles from './Header.module.scss'

export const Header: FC = () => (
  <header className={styles.header}>
    <Input type="search" placeholder="Search" />
  </header>
)
