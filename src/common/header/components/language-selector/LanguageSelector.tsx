import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './LanguageSelector.module.scss'

const sn = styleNames(styles)

type Props = {
  language: string
}

export const LanguageSelector: FC<Props> = ({ language }: Props) => {
  const languageSelectorClasses = sn('language-selector')

  return (
    <div className={languageSelectorClasses}>
      <span role="img" aria-label="country flag">
        🇺🇸
      </span>
      <span>{language}</span>
    </div>
  )
}
