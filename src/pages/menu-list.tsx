import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiMenu, mdiUpload } from '@mdi/js'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import Head from 'next/head'
import { ReactElement, useState, useEffect } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBoxGeneral from '../components/CardBoxGeneral'
import FormCheckRadio from '../components/FormCheckRadio'
import FormCheckRadioGroup from '../components/FormCheckRadioGroup'
import FormField from '../components/FormField'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import SectionTitleLineWithoutButton from '../components/SectionTitleLineWithoutButton'
import { getPageTitle } from '../config'
import axios, { decodeErrorStatus } from '../stores/hooks'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup'
import {
  cardBoxStyle,
  dashBoardField,
  dashboardFormPText,
  dashboardHeading,
  submitButton,
  submitButtonDashboard,
} from '../styles'
import MenuListTable from '../components/MenuListTable'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'


const MenuListPage = () => {
  const GET_MENU_ENDPOINT = '/api/v1/menus'

  const [errMsg, setErrMsg] = useState('')
  //const [token, setAppToken] = useState('')
  const [menus, setMenus] = useState([])
 let currentBranch = ''
 let token=''
   //[currentBranch, setCurrentBranch] = useState('')


  useEffect(() => {
   // setAppToken(localStorage.getItem('token'))
   //setCurrentBranch(localStorage.getItem('branch'))
   if (typeof window !== 'undefined') {
     currentBranch = localStorage.getItem('branch')
    token = localStorage.getItem('token')
    getMenus()
  }

   // getMenus()
  }, [])

  const getMenus = async () => {
     
    try {
      //alert(currentBranch)
        const response = await axios.get(GET_MENU_ENDPOINT,
          {
            headers: {
                       'Authorization': 'Bearer ' + token
          },
          params: { branch: currentBranch },
            withCredentials: true
        }
        );
          if(response?.status == 200){
            
           setMenus(response.data);
           console.log(response.data)
            
          }
        console.log(JSON.stringify(response?.status));
        
    } catch (err) {
      if (!err || !err?.response) {
         setErrMsg('No Server Response');
      } 
      else  {
       setErrMsg(decodeErrorStatus(err?.response.status))
         }

         toast("Error fetching menu items. Please check your network!");
 }
}

  return (
    <>
      <Head>
        <title>{getPageTitle('Menu List')}</title>
      </Head>


      <SectionTitle>
        <p style={dashboardHeading}>List of Menu Items</p>
      </SectionTitle>

      <div className="md:w-10/12 shadow-1xl md:mx-auto border-white">
        <SectionMain>
            <ToastContainer />
          <CardBoxGeneral>
           {(menus.length === 0)
          ? <CardBoxComponentEmpty />
           
            :<MenuListTable items={menus}/>}
          </CardBoxGeneral>
        </SectionMain>
      </div>
    </>
  )
}

MenuListPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default MenuListPage
