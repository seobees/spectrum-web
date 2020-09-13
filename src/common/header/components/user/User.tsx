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

  return (
    <div className={userClasses}>
      <span>{userName}</span>
      <span>{userRole}</span>
    </div>
  )
}
