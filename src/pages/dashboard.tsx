import {
  
  mdiChartTimelineVariant,
 
  mdiMinusBox,
 mdiOrderBoolAscending,
  mdiSack,
  mdiSale,

} from '@mdi/js'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import SectionTitleLineWithoutButton from '../components/SectionTitleLineWithoutButton'
import CardBoxWidget from '../components/CardBoxWidget'
import CardBoxGeneral from '../components/CardBoxGeneral'
import { getPageTitle } from '../config'
import axios, { decodeErrorStatus, errorHandler, dashboardClass, showFeature, useAppSelector } from '../stores/hooks'
import { ToastContainer, toast } from 'react-toastify'
import { MoonLoader } from 'react-spinners'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'

const Dashboard = () => {


  const GET_DASHBOARD_DATA_ENDPOINT = "/api/transaction-summary";

  const [dashboardData, setDashboardData] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
  fetchDashboardData()
  }, [])

  useEffect(() => {
    if (Object.keys(dashboardData).length) {
      setIsDataReady(true);
    }
  }, [dashboardData])


  const fetchDashboardData = async()=> {
    const branchId = localStorage.getItem('branch');
    try {
     
      const response = await axios.get(`${GET_DASHBOARD_DATA_ENDPOINT}`, 
        {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token')},
          withCredentials: true
      });
         if(response?.status == 200 || response?.status==201){
          console.log(response.data)
          setDashboardData({...response.data})
          
        }
           
    }catch (err) {
   const errMsg = errorHandler(err)
       toast(errMsg);
  }
  }


  
  if (!dashboardData || Object.keys(dashboardData).length === 0) return null;

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <div className="md:w-10/12 shadow-1xl md:mx-auto border-white">
      <ToastContainer />
        <SectionMain>
         
           <div>
              <CardBoxWidget

                trendColor="white"
                icon={mdiSack}
                iconColor="warning"
                number={dashboardData['deposit']}
                numberPrefix=""
                label="Total Deposit"
              />
            </div>
           
<div>
<CardBoxWidget
  trendColor="white"
  icon={mdiMinusBox}
  iconColor="info"
  number={dashboardData['withdraw']}
  numberPrefix=""
  label="Total Withdrawal"
/>
</div>
        </SectionMain>
      </div>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Dashboard
