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

export default function SignUp() {
  const router = useRouter()
  const SIGNUP_URL = "/api/register";
  const [errMsg, setErrMsg] = useState('Unknown error');

  useEffect(() => {
    localStorage.removeItem("token");
    sessionStorage.clear();
  }, [])
  

  const handleSignup = async (values) => {
    const id = toast.loading("Processing...")
    const customId = "custom-id-signup";
    try {
        const response = await axios.post(SIGNUP_URL,
            values,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                
            }
        )
        
        
        if (response.status == 201) {
          
          console.log("MYR"+response?.data)
        
         
          toast.update(id, { render: "Registration successful!", 
          type: "success", toastId: customId, theme: "colored", isLoading: true });

        
          router.push('/');
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
        <title>{getPageTitle('SignUp')}</title>
      
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
            onSubmit={(values) => handleSignup(values)}
          >
            
            <Form>
              <FormField label="Name" help="Please enter your name">
                <Field name="name" type="text" />
              </FormField>

              <FormField label="email" help="Please enter your email ID">
                <Field name="email" type="email" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>


              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Register" color="info" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </div>
    </>
  )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
