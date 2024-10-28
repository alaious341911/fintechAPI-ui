import { mdiCog } from '@mdi/js'
import React from 'react'
import { ColorKey, TrendType } from '../interfaces'
import { colorsText } from '../colors'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import CardBox from './CardBox'
import CardBoxLight from './CardBoxLight'
import NumberDynamic from './NumberDynamic'
import PillTagTrend from './PillTagTrend'
import {
  darkBlueBox,
  dashboardBoxTextDark,
  dashboardBoxTextLDark,
  dashboardBoxTextLWhite,
  dashboardBoxTextWhite,
} from '../styles'

type Props = {
  number: number
  numberPrefix?: string
  numberSuffix?: string
  icon: string
  iconColor: ColorKey
  label: string
  trendLabel?: string
  trendType?: TrendType
  trendColor?: ColorKey
  cardBoxLight?: string
  cardBoxColor?: string
  trendingItem?: string
  itemCounter?: string
}

const CardBoxWidget = (props: Props) => {
  return (
    <CardBox boxColor={props.cardBoxColor}>
      {props.trendLabel && props.trendType && props.trendColor && (
        <div className="flex items-center justify-between mb-3">
          <PillTagTrend
            label={props.trendLabel}
            type={props.trendType}
            color={props.trendColor}
            small
          />
          <BaseButton icon={mdiCog} color="lightDark" small />
        </div>
      )}
      <div className="flex items-center gap-10">
        {props.icon && (
          <BaseIcon
            path={props.icon}
            size="48"
            w=""
            h="h-16"
            className={colorsText[props.iconColor]}
          />
        )}
        <div>
          <h3
            className="text-lg leading-tight text-white dark:text-slate-400"
            style={props.cardBoxLight === 'yes' ? dashboardBoxTextWhite : dashboardBoxTextDark}
          >
            {props.label}
          </h3>
          <h2
            className="text-3xl leading-tight font-semibold text-white"
            style={props.cardBoxLight === 'yes' ? dashboardBoxTextLWhite : dashboardBoxTextLDark}
          >
            <NumberDynamic
              value={props.number}
              prefix={props.numberPrefix}
              suffix={props.numberSuffix}
            />
          </h2>
          <h3
            className="text-lg leading-tight text-white dark:text-slate-400"
            style={props.cardBoxLight === 'yes' ? dashboardBoxTextWhite : dashboardBoxTextDark}
          >
            {props.trendingItem}
          </h3>
          <h2
            className="text-3xl leading-tight font-semibold text-white"
            style={props.cardBoxLight === 'yes' ? dashboardBoxTextWhite : dashboardBoxTextDark}
          >
            <NumberDynamic accountNumber={props.itemCounter} />
          </h2>
        </div>
      </div>
    </CardBox>
  )
}

export default CardBoxWidget
