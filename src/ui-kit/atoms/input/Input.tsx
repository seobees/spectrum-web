import React, { FC } from 'react'

import styles from './Input.module.scss'

type Props = Readonly<{
  value?: string | number
  placeholder?: string
  type?: 'text' | 'search'
}>

export const Input: FC<Props> = ({ type = 'text', value = '', placeholder = '' }: Props) => (
  <input type={type} value={value} placeholder={placeholder} className={styles.input} />
)

Input.displayName = 'Input'
