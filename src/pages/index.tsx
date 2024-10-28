
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import CardBoxGeneral from '../components/CardBoxGeneral'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/SectionMain'
import { HomeMenus } from '../interfaces'
import { gradientBgPurplePink } from '../colors'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode, setStyle } from '../stores/styleSlice'
import BaseButton from '../components/BaseButton'
import { backgroundGradient } from '../styles'
import HeroBackground from '../components/HeroBackground'
import logoImage from "/public/fintech-logo.png";

const HomePage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  dispatch(setDarkMode(false))

  const homeMenus: HomeMenus[] = ['login', 'forgot-password']

  const handleStylePick = (e: React.MouseEvent, menu: HomeMenus) => {
    e.preventDefault()

    //dispatch(setStyle(style))

    router.push(menu)
  }

 

  return (
    <>
      <div style={backgroundGradient} className="leading-normal tracking-normal text-white">

        <nav id="header" className="fixed w-full z-30 top-0 text-white">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img src={logoImage.src} width={50} height={50} alt="fintech" className="inline" />
              </a>
            </div>
           
            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-green-700 lg:bg-transparent text-black p-4 lg:p-0 z-20 ${showMenu ? '' : 'hidden'}`} id="nav-content">
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
        
      <li className="mr-3">
        <a className="inline-block text-white no-underline hover:text-white hover:text-underline py-2 px-4" href="login"  onClick={(e) => handleStylePick(e, "login")}>Login</a>
      </li>
    </ul>
    <button id="navAction"
      className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
             <a onClick={(e) => handleStylePick(e, "signup")}>Register</a>
    </button>
  </div>
</div>
<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
{/* //  <!--Hero--> */}
    <HeroBackground/>
    </div>
     
      </>
  )
 }

 HomePage.getLayout = function getLayout(page: ReactElement) {
   return <LayoutGuest>{page}</LayoutGuest>
 }

 export default HomePage


