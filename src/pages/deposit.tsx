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
import type {Deposit, LinkBankAccount} from '../interfaces'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import * as Yup from 'yup'
import { dashBoardField, dashboardHeading, errorMessage, submitButton } from '../styles'
import CardBoxGeneral from '../components/CardBoxGeneral'


const DepositPage = () => {
    const DEPOSIT = "/api/deposit";
    
 let token=''

    const newLinking: Deposit ={
      amount: 0
    }

    useEffect(() => {
     
      if (typeof window !== 'undefined') {
       token = localStorage.getItem('token')
       
     }
    }, [])

    

    const handleDeposit = async (values, {setSubmitting, setFieldValue}) => {
     
    
console.log("Deposit Money", values)
        setSubmitting(true)
        const id = toast("Proccessing...", {theme: 'light', closeOnClick: true, position: "top-right",
        autoClose: 6000})
           const customId = "deposit-id";
      try {
       
          const response = await axios.post(DEPOSIT,
              values,
              {
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                 },
                withCredentials: true,
                
            }
          );
            if(response?.status == 200){
              
              toast.update(id, { render: "Deposit successful!", type: "success", 
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
        setFieldValue('amount', 0)
       
      }
  }


  return (
    <>
      <Head>
        <title>{getPageTitle('Fund Account')}</title>
      </Head>

      <SectionTitle>
        <p style={dashboardHeading}>Fund Account</p>
      </SectionTitle>

      <div className="md:w-10/12 shadow-1xl md:mx-auto border-white">
        <SectionMain>
        <ToastContainer />
          <CardBoxGeneral>
            
            <Formik
              initialValues={newLinking}
              validationSchema={Yup.object({
                amount: Yup.number().min(1).required("amount is required"),
                
              })}
              onSubmit= {(values, {setSubmitting, setFieldValue}) => handleDeposit(values, {setSubmitting, setFieldValue})}
            >
              {({values, isSubmitting }) => (
              <Form>
              

<FormField label="Amount">
                  <Field
                    className=""
                    style={dashBoardField}
                    type="text"
                    name="amount"
                    placeholder="amount"
                  />

                </FormField>
                
                <ErrorMessage name="amount">{msg => <span style={errorMessage}>{msg}</span>}</ErrorMessage>

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

DepositPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DepositPage
