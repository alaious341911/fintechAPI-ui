import {
  mdiMonitor,
  mdiMenu,
  mdiCalculator,
  
} from '@mdi/js'
import { MenuAsideItem} from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: 'dashboard',
    icon: mdiMenu,
    label: 'Dashboard',
  },

  {
    href: 'link-bank-account',
    icon: mdiMonitor,
    label: 'Link Account',
  },
  {
    label: 'Transaction',
    icon: mdiCalculator,
    menu: [
      {
        label: 'Deposit',
        href: 'deposit',
      },
      {
        label: 'Withdraw',
        href: 'withdraw',
      },
      {
        label: 'Transaction History',
        href: 'transaction-history',
      },
    ],
  }
  
]

export default menuAside
