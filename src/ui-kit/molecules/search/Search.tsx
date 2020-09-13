import React, { ChangeEvent, FC } from 'react'
import { Input, SearchIcon } from 'ui-kit/atoms'
import { mergeStyles, styleNames } from 'libs/style-names'
import { noop } from 'libs/utils'
import styles from './Search.module.scss'

const sn = styleNames(styles)

type Props = {
  /* Properties */
  id: string
  value?: string
  placeholder?: string
  label?: string
  labelVisible?: boolean
  className?: string

  /* Handlers */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<Props> = ({ id, value, placeholder, label, labelVisible, className, onChange }: Props) => {
  const searchClasses = sn('search')
  const searchIconClasses = sn('search__icon')
  const inputClasses = sn('search__input')

  return (
    <div className={mergeStyles(searchClasses, className)}>
      <SearchIcon className={searchIconClasses} />
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        label={label}
        labelVisible={labelVisible}
        type="search"
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  )
}

Search.displayName = 'Search'

Search.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  labelVisible: false,
  className: '',

  onChange: noop,
}
