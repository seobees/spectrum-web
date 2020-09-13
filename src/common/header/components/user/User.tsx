import React, { FC } from 'react'
import { styleNames } from 'libs/style-names'
import styles from './User.module.scss'

const sn = styleNames(styles)

type Props = {
  userName: string
  userRole: string
}

export const User: FC<Props> = ({ userName, userRole }: Props) => {
  const userClasses = sn('user')
  const userNameClasses = sn('user__name')
  const userRoleClasses = sn('user__role')

  return (
    <div className={userClasses}>
      <span className={userNameClasses}>{userName}</span>
      <span className={userRoleClasses}>{userRole}</span>
    </div>
  )
}
