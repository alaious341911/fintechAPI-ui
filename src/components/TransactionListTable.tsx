import { mdiEye, mdiSendOutline, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleClients } from '../hooks/sampleData'
import { TransactionHistory } from '../interfaces'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'
import CardBoxModal from './CardBoxModal'
import UserAvatar from './UserAvatar'

const HistoryListTable = ({items}) => {
  
  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const itemsPaginated = items.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = Math.ceil(items.length / perPage)

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  
  return (
    <>
      <table>
        <thead>
          <th data-label="Transaction Type">Transaction Type</th>
          <th data-label="Amount">Amount</th>
          <th data-label="CreationAt">Creation Date</th>
        </thead>
        <tbody>
          {itemsPaginated.map((history: TransactionHistory) => (
            <tr key={history.id}>
              <td data-label="Type">{history.type}</td>
              <td data-label="Amount">{history.amount}</td>
              <td data-label="CreationAt">{history.created_at}</td>
              <td className="before:hidden lg:w-1 whitespace-nowrap text-right"> </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesList.map((page) => (
              <BaseButton
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </BaseButtons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default HistoryListTable
