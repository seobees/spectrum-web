import React, { FC } from 'react'
import { CountryCode } from 'types/localization'
import { USFlagIcon } from '../sources'

/**
 * We use https://hjnilsson.github.io/country-flags/ as a country flags source
 */

type Props = Readonly<{
  country?: CountryCode
  className?: string
  width?: number
  height?: number
}>

export const FlagIcon: FC<Props> = ({ country, className, width, height }: Props) => {
  switch (country) {
    case 'US':
      return <USFlagIcon width={width} height={height} className={className} />
    default:
      return <USFlagIcon width={width} height={height} className={className} />
  }
}

FlagIcon.defaultProps = {
  country: 'US',
  width: 40,
  height: 27,
}
