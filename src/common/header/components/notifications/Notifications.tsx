import React, { FC } from 'react'
import { BellIcon } from 'ui-kit/atoms'
import { styleNames } from 'libs/style-names'
import styles from './Notifications.module.scss'

const sn = styleNames(styles)

type Props = {
  count?: number
}

export const Notifications: FC<Props> = ({ count }: Props) => {
  const wrapperClasses = sn('notifications')
  const bellClasses = sn('notifications__bell')
  const countClasses = sn('notifications__count')

  const notificationsCount = count && count > 0 ? <span className={countClasses}>{count}</span> : null

  return (
    <div className={wrapperClasses}>
      <BellIcon width={24} height={26} className={bellClasses} />
      {notificationsCount}
    </div>
  )
}

Notifications.defaultProps = {
  count: 0,
}
