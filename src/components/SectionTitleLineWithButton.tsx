// import { mdiCog } from '@mdi/js'
// import React, { Children, ReactNode } from 'react'
// import BaseButton from './BaseButton'
// import BaseIcon from './BaseIcon'
// import IconRounded from './IconRounded'

// type Props = {
//   icon: string
//   title: string
//   main?: boolean
//   children?: ReactNode
// }

// export default function SectionTitleLineWithButton({ icon, title, main = false, children }: Props) {
//   const hasChildren = !!Children.count(children)

//   return (
//     <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
//       <div className="flex items-center justify-start">
//         {icon && main && <IconRounded icon={icon} color="light" className="mr-3" bg />}
//         {icon && !main && <BaseIcon path={icon} className="mr-2" size="20" />}
//         <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}>{title}</h1>
//       </div>
//       {children}
//       {!hasChildren && <BaseButton icon={mdiCog} color="whiteDark" />}
//     </section>
//   )
// }

import { mdiCog, mdiFilter, mdiHead, mdiMagnify } from '@mdi/js'
import React, { Children, ReactNode, useState } from 'react'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import IconRounded from './IconRounded'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Icon from '@mdi/react';
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { setTransaction } from '../stores/transactionSlice'
import { setDashboard } from '../stores/dashboardSlice'



type Props = {
  icon?: string
  title?: string
  main?: boolean
  children?: ReactNode
  handleSearchClick?: (s, e) => void
}

export default function SectionTitleLineWithButton({handleSearchClick, icon, title, main = false, children }: Props) {
  const hasChildren = !!Children.count(children)
  const [showDatePickers, setShowDatePickers] = useState(true);
  const [showSearch, setSearch] = useState(true);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [ovalue, setOValue] = React.useState<Dayjs | null>(dayjs());
  const dispatch = useAppDispatch()
  

  
  const pageNumber = useAppSelector((state) => state.transaction.pageNumber)
  
  function handleFilterClick() {
    setShowDatePickers(!showDatePickers);
    setSearch(!showSearch)
    }

    
    const dateFormatter = (dateValue) => {
      const date = new Date(dateValue);
      const options = { timeZone: 'Africa/Lagos' };
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const formattedDate = `${year}-${month}-${day}`;
    
      return formattedDate;
    }
    dispatch(setDashboard({ startDate: dateFormatter(ovalue), endDate: dateFormatter(value)}))
  

  return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        {icon && main && <IconRounded icon={icon} color="light" className="mr-3" bg />}
        {icon && !main && <BaseIcon path={icon} className="mr-2" size="20" />}
        {/* <h1 className={`leading-tight ${main ? 'text-3xl' : 'text-2xl'}`}>Sales Log Table</h1> */}
      </div>
      {children}
      {!hasChildren 
      && (
        <>
        <BaseButton icon={mdiFilter} iconSize={20} color="whiteDark" onClick={handleFilterClick} />
        {showDatePickers && (
         <LocalizationProvider dateAdapter={AdapterDayjs}>
        
        <DatePicker label="Start Date"
         value={ovalue}
         onChange={(newValue) => setOValue(newValue)}
        />
        <DatePicker label="End Date"
         value={value}
         onChange={(oldValue) => setValue(oldValue)}
        />
        </LocalizationProvider>
        )}

{showDatePickers && (
  <div onClick={() => handleSearchClick( dateFormatter(ovalue),  dateFormatter(value))}>
 <Icon 
  path={mdiMagnify} 
  size={1} 
  style={{ cursor: 'pointer' }} 
/>
</div>
               )}    
        </>
        )}

    </section>
  )
}

