import { mdiCog, mdiUbuntu } from '@mdi/js'
import React, { Children, ReactNode } from 'react'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import IconRounded from './IconRounded'
import { dashboardHeading, moneyWayHeader } from '../styles'

type Props = {
  icon?: string
  title: string
  main?: boolean
  branchLabel?: string
  children?: ReactNode
}

export default function SectionTitleLineWithoutButton({
  icon,
  title,
  main = false,
  branchLabel,
  children,
}: Props) {
  const hasChildren = !!Children.count(children)

  return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        {!icon && main && <IconRounded icon={icon} color="light" className="mr-3" bg />}
        {icon && !main && <BaseIcon path={icon} className="mr-2" size="20" />}
        <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`} style={dashboardHeading}>
          {title}-{(branchLabel)}
        </h1>
      </div>
      {children}
      {/* {!hasChildren && <BaseButton icon={mdiUbuntu} color="whiteDark" />} */}
    </section>
  )
}
