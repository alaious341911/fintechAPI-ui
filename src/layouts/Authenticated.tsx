import React, { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import AsideMenu from '../components/AsideMenu'
import { setUser } from '../stores/mainSlice'
import { useAppDispatch, useAppSelector, getUserMenu } from '../stores/hooks'
import { useRouter } from 'next/router'



type Props = {
  children: ReactNode
}

export default function LayoutAuthenticated({ children }: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      setUser({
        name: 'Nurudeen Alabi',
        email: 'nurudain@gmail.com',
        avatar:
          'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
          role: localStorage.getItem('role')
      })
      
    )
   
  })



  const darkMode = useAppSelector((state) => state.style.darkMode)

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)
  const [token, setAppToken] = useState('');
  
  

  const router = useRouter()

  useEffect(() => {
    setAppToken(localStorage.getItem('token'))
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false)
      setIsAsideLgActive(false)
    }

    

    router.events.on('routeChangeStart', handleRouteChangeStart)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router.events, dispatch])

  const layoutAsidePadding = 'xl:pl-60'

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        
        {token &&(
          <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={getUserMenu(localStorage.getItem('role'))}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        )}
       
        {children}
      
      </div>
    </div>
  )
}
