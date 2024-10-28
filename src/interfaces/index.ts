import { ReactNode } from "react"

export type UserPayloadObject = {
  name: string
  email: string
  avatar: string
  role: string
}

export type ColorKey =
  | 'white'
  | 'dark'
  | 'light'
  | 'contrast'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type ColorButtonKey =
  | 'white'
  | 'whiteDark'
  | 'lightDark'
  | 'contrast'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'void'
  | 'lightBlue'

export type BgKey = 'purplePink' | 'pinkRed' | 'lightBlue'

export type TrendType = 'up' | 'down' | 'success' | 'danger' | 'warning' | 'info'

export type TransactionType = 'withdraw' | 'deposit' | 'invoice' | 'payment'

export type Transaction = {
  id: number
  amount: number
  account: string
  name: string
  date: string
  type: TransactionType
  business: string
}

export type StyleKey = 'white' | 'basic'

export type HomeMenus = 'login' | 'signup' | 'forgot-password' | 'verify-link'

export type UserForm = {
  userId?: string
  username?: string
  firstName: string
  lastName: string
  middleName: string
  residentAddress: string
  password: string
  phoneNumber: string
  role?: null | string
  branch?: null | string
}



export type TransactionHistory = {
  id: number
  amount: number
  type: string
  created_at?: Date
}


export type LinkBankAccount = {

  account_number?: string
  bank_name?: string
}

export type Deposit = {
  amount?: number
}

export type Withdraw = {
  amount?: number
}
