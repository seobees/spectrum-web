import React, { FC } from 'react'
import { CountryCode } from 'types/localization'
import { FlagIcon } from 'ui-kit/atoms'
import { styleNames } from 'libs/style-names'
import styles from './LanguageSelector.module.scss'

const sn = styleNames(styles)

type Props = {
  language: string
  country: CountryCode
}

export const LanguageSelector: FC<Props> = ({ language, country }: Props) => {
  const wrapperClasses = sn('language-selector')
  const flagClasses = sn('language-selector__flag')
  const labelClasses = sn('language-selector__label')

  return (
    <div className={wrapperClasses}>
      <FlagIcon className={flagClasses} country={country} />
      <span className={labelClasses}>{language}</span>
    </div>
  )
}
