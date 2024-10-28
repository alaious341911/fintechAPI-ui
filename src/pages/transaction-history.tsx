
import Head from 'next/head'
import { ReactElement, useState, useEffect } from 'react'
import CardBoxGeneral from '../components/CardBoxGeneral'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import { getPageTitle } from '../config'
import axios, { decodeErrorStatus } from '../stores/hooks'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  dashboardHeading,
} from '../styles'
import TransactionListTable from '../components/TransactionListTable'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'


const ExpenseListPage = () => {
  const GET_TRAN_HISTORY = '/api/transactions'

  const [errMsg, setErrMsg] = useState('')
  const [token, setAppToken] = useState('')
  const [history, setHistory] = useState([])


  useEffect(() => {
    setAppToken(localStorage.getItem('token'))
    getTranHistory()
  }, [])

  const getTranHistory = async () => {
      
    try {
        const response = await axios.get(GET_TRAN_HISTORY,
            {
                headers: {
                           'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
                withCredentials: true
            }
        );
          if(response?.status == 200){
            
           setHistory(response.data);
           console.log(history)
            
          }
        console.log(JSON.stringify(response?.status));
        
    } catch (err) {
      if (!err || !err?.response) {
         setErrMsg('No Server Response');
      } 
      else  {
       setErrMsg(decodeErrorStatus(err?.response.status))
         }

         toast("Error fetching transactions from the server. Please check your network!");
 }
}

  return (
    <>
      <Head>
        <title>{getPageTitle('Tran History List')}</title>
      </Head>


      <SectionTitle>
        <p style={dashboardHeading}>List of Transactions</p>
      </SectionTitle>

      <div className="md:w-10/12 shadow-1xl md:mx-auto border-white">
        <SectionMain>
            <ToastContainer />
          <CardBoxGeneral>
           {(history.length === 0)
          ? <CardBoxComponentEmpty />
           
            :<TransactionListTable items={history}/>}
          </CardBoxGeneral>
        </SectionMain>
      </div>
    </>
  )
}

ExpenseListPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ExpenseListPage
