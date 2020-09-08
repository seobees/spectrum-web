import React, { FC, ChangeEvent } from 'react'
import { noop } from 'libs/utils'
import { styleNames } from 'libs/style-names'
import styles from './Input.module.scss'

const sn = styleNames(styles)

type Props = Readonly<{
  /* Properties */
  id: string
  value?: string | number
  placeholder?: string
  type?: 'text' | 'search' | 'number'

  /* Handlers */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}>

export const Input: FC<Props> = ({ id, type = 'text', value = '', placeholder = '', onChange = noop }: Props) => {
  const inputClasses = sn('input')
  return (
    <label htmlFor={id}>
      <input id={id} type={type} value={value} placeholder={placeholder} onChange={onChange} className={inputClasses} />
    </label>
  )
}

Input.displayName = 'Input'
