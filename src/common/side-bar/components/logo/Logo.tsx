import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { styleNames } from 'libs/style-names'
import { noop } from 'libs/utils'
import styles from './Logo.module.scss'

const sn = styleNames(styles)

export const Logo: FC = () => {
  const wrapperClasses = sn('logo')
  const titleClasses = sn('logo__title')
  const firstTitleClasses = sn('logo__first')
  const secondTitleClasses = sn('logo__second')

  return (
    <Link to="/" className={wrapperClasses}>
      <h1 className={titleClasses}>
        <span className={firstTitleClasses}>SEO</span>
        <span className={secondTitleClasses}>BEES</span>
      </h1>
    </Link>
  )
}

Logo.displayName = 'Logo'

Logo.defaultProps = {
  onClick: noop,
}
