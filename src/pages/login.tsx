import React, { useState, useRef, useEffect } from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/SectionFullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/FormField'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import axios from '../stores/hooks'
import {useAppDispatch, useAppSelector, decodeErrorStatus} from '../stores/hooks'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import PagesTitle from '../components/PagesTitle'
import { pagesTitle } from '../../styles'
import logoImage from "/public/fintech-logo.png";
import { backgroundGradient } from '../styles'

export default function Login() {
  const router = useRouter()
  const LOGIN_URL = "/api/login";
  const [errMsg, setErrMsg] = useState('Unknown error');

  useEffect(() => {
    localStorage.removeItem("token");
    sessionStorage.clear();
  }, [])
  

  const handleSubmit = async (values) => {
    const id = toast.loading("Authenticating...")
    const customId = "custom-id-yes";
    try {
        const response = await axios.post(LOGIN_URL,
            values,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                
            }
        )
        
        
        if (response.status == 200) {
          localStorage.setItem('token', response?.data.token);
        
          console.log("MYR"+response?.data)
        
         
          toast.update(id, { render: "Authenticated! Redirecting to the dashboard....", 
          type: "success", toastId: customId, theme: "colored", isLoading: true });

        
          router.push('dashboard').then(() => {
            toast.update(customId, {
              render: "Redirected to the dashboard.",
              isLoading: false,
              autoClose: 2000, // optional, adds a delay before closing the toast
            });
          });
        }
        console.log(JSON.stringify(response?.status));
        
    } catch (err) {
      if (!err?.response) {
         setErrMsg('No Server Response');
      } 
      else  {
       setErrMsg(decodeErrorStatus(err?.response.status))
         }

     //toast(errMsg || "Unknown error")
     toast.update(id, { render: errMsg, type: "error", theme: "colored", toastId: customId, isLoading: false });
 }
}

  return (
    <>
  
      <Head>
        <title>{getPageTitle('Login')}</title>
      
      </Head>
      <PagesTitle>
        <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0 pt-11">
          <img src={logoImage.src} width={100} height={100} alt="fintech" className="inline w-14 h-14" />
          
        </div>
        
      </PagesTitle>

      <div style={backgroundGradient}>
      <ToastContainer />
        <CardBox className="w-11/12 md:w-10/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
        
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => handleSubmit(values)}
          >
            
            <Form>
              <FormField label="Login" help="Please enter your login ID">
                <Field name="email" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>


              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Login" color="info" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </div>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
