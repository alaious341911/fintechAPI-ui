import { mdiEye, mdiSendOutline, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleClients } from '../hooks/sampleData'
import { Client, MenuForm } from '../interfaces'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'
import CardBoxModal from './CardBoxModal'
import UserAvatar from './UserAvatar'

const MenuListTable = ({items}) => {
  
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
          <th data-label="Name">Item name</th>
          <th data-label="Name">Item Cost Price</th>
          <th data-label="Name">Item Selling Price</th>
          <th data-label="Name">Item Description</th>
        </thead>
        <tbody>
          {itemsPaginated.map((client: MenuForm) => (
            <tr key={client.menuId}>
              <td data-label="Name">{client.name}</td>
              <td data-label="Name">{client.costPrice}</td>
              <td data-label="Name">{client.sellingPrice}</td>
              <td data-label="Name">{client.description}</td>
              <td className="before:hidden lg:w-1 whitespace-nowrap text-right">
               
              </td>
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

export default MenuListTable
