import { Field, Form, Formik, ErrorMessage } from 'formik'
import Head from 'next/head'
import { ReactElement, useState, useEffect } from 'react'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import FormField from '../components/FormField'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import { getPageTitle } from '../config'
import axios, { errorHandler } from '../stores/hooks'
import type {LinkBankAccount} from '../interfaces'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import * as Yup from 'yup'
import { dashBoardField, dashboardHeading, errorMessage, submitButton } from '../styles'
import CardBoxGeneral from '../components/CardBoxGeneral'


const LinkBankPage = () => {
    const LINK_BANK_ACCOUNT = "/api/link-bank-account";
    
 let token=''

    const newLinking: LinkBankAccount ={
      account_number: '',
      bank_name: '',
    }

    useEffect(() => {
     
      if (typeof window !== 'undefined') {
       token = localStorage.getItem('token')
       
     }
    }, [])

    

    const handleBankLinking = async (values, {setSubmitting, setFieldValue}) => {
     
    
console.log("bank linking send", values)
        setSubmitting(true)
        const id = toast("Proccessing...", {theme: 'light', closeOnClick: true, position: "top-right",
        autoClose: 6000})
           const customId = "link-bank-id";
      try {
       
          const response = await axios.post(LINK_BANK_ACCOUNT,
              values,
              {
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                 },
                withCredentials: true,
                
            }
          );
            if(response?.status == 200){
              
              toast.update(id, { render: "Account linking successful!", type: "success", 
            toastId: customId, theme: "colored", isLoading: false,
             closeOnClick: true, position: "top-right",
             autoClose: 1000, });
              
            }
          console.log(JSON.stringify(response?.status));
          console.log(JSON.stringify(response?.data));
          
      } catch (err) {
        const errMsg = errorHandler(err)
  
              toast.update(id, { render: errMsg, type: "error", 
              toastId: customId, theme: "colored", isLoading: false,
              closeOnClick: true, position: "top-right",
              autoClose: 1000});
      }

      finally{
        setSubmitting(false);
        setFieldValue('account_number', '')
        setFieldValue('bank_name', '')
      }
  }


  return (
    <>
      <Head>
        <title>{getPageTitle('Link Bank Account')}</title>
      </Head>

      <SectionTitle>
        <p style={dashboardHeading}>Link Account</p>
      </SectionTitle>

      <div className="md:w-10/12 shadow-1xl md:mx-auto border-white">
        <SectionMain>
        <ToastContainer />
          <CardBoxGeneral>
            
            <Formik
              initialValues={newLinking}
              validationSchema={Yup.object({
                account_number: Yup.string().min(10).max(10).required("account number is required"),
                bank_name: Yup.string().min(5).required("account name is required"),
                //amount: Yup.number().min(0).required("issue is required"),
                
              })}
              onSubmit= {(values, {setSubmitting, setFieldValue}) => handleBankLinking(values, {setSubmitting, setFieldValue})}
            >
              {({values, isSubmitting }) => (
              <Form>
              

<FormField label="Bank name">
                  <Field
                    className=""
                    style={dashBoardField}
                    type="text"
                    name="bank_name"
                    placeholder="bank name"
                  />

                </FormField>
                
                <ErrorMessage name="bank_name">{msg => <span style={errorMessage}>{msg}</span>}</ErrorMessage>

          <FormField label="Account number">
                  <Field
                    className=""
                    style={dashBoardField}
                    type="text"
                    name="account_number"
                    placeholder="account number"
                  />
                </FormField>
                <ErrorMessage name="account_number">{msg => <span style={errorMessage}>{msg}</span>}</ErrorMessage>

                <BaseDivider />

                <BaseButtons>
                <button type="submit" style={submitButton} disabled={isSubmitting}>
                    Submit
                  </button>
                </BaseButtons>
              </Form>
              )}
            </Formik>
          </CardBoxGeneral>
        </SectionMain>
      </div>

      
    </>
  )
}

LinkBankPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default LinkBankPage
