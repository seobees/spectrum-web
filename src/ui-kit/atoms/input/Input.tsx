import React, { FC, ChangeEvent } from 'react'
import { mergeStyles, styleNames } from 'libs/style-names'
import { noop } from 'libs/utils'
import styles from './Input.module.scss'

const sn = styleNames(styles)

type Props = Readonly<{
  /* Properties */
  id: string
  value?: string | number
  placeholder?: string
  type?: 'text' | 'search' | 'number'
  label?: string
  labelVisible?: boolean
  className?: string

  /* Handlers */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}>

export const Input: FC<Props> = ({ id, type, value, label, labelVisible, placeholder, className, onChange }: Props) => {
  const inputClasses = sn('input')
  const inputControlClasses = sn('input__control')

  const labelEl = labelVisible ? <span>{label}</span> : null
  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{labelEl}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={mergeStyles(inputControlClasses, className)}
      />
    </div>
  )
}

Input.displayName = 'Input'

Input.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text',
  label: '',
  labelVisible: false,
  onChange: noop,
}
