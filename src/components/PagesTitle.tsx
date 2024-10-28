import React, { ReactNode } from 'react'

type Props = {
  custom?: boolean
  first?: boolean
  last?: boolean
  children: ReactNode
}

const PagesTitle = ({ custom = false, first = false, last = false, children }: Props) => {
  let classAddon = '-my-10'

  if (first) {
    classAddon = '-mb-3'
  } else if (last) {
    classAddon = '-mt-6'
  }

  return <div className="bg-gradient-to-r from-cyan-50 to-cyan-50">{children}</div>
}

export default PagesTitle
