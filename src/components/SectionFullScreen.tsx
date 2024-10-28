import React, { ReactNode } from 'react'
import { BgKey } from '../interfaces'
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
  gradientBgLigthBlue,
} from '../colors'
import { useAppSelector } from '../stores/hooks'

type Props = {
  bg: BgKey
  children: ReactNode
}

export default function SectionFullScreen({ bg, children }: Props) {
  const darkMode = useAppSelector((state) => state.style.darkMode)

  let componentClass = 'flex items-center justify-center '

  if (darkMode) {
    componentClass += gradientBgDark
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed
  } else if (bg === 'lightBlue') {
    componentClass += gradientBgLigthBlue
  }

  return (
    <>
      {/* <div className='flex items-center justify-center'>
    <img
  src="MONEYWAY-3.png"
  alt="moneyway"
  className="w-12 h-12"
/>
    </div> */}
      <div className={componentClass}>{children}</div>
    </>
  )
}
