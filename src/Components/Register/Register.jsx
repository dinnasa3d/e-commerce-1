
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup" ;

 const mySchema = Yup.object({
  name: Yup.string().required("Name must be required.").min(3 , "at least 3 Characters").max(10) ,
  phone : Yup.string().required().matches( /^01[0125][0-9]{8}$/ ) ,
  email : Yup.string().email(),
  password : Yup.string().min(6).max(12) ,
  rePassword : Yup.string().min(6).max(12) ,


})


export default function Register() {



  const userDate ={

    name:"",
    email:"",
    phone:"",
    password:"",
    rePassword:"",
  }
 const [isSuccess, setisSuccess] = useState(false); 
 const [isloading, setisloading] = useState(false); 
 const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

 async function sendUserData(userData){
     
    setisloading(true);
 await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" ,userData )
 .then(function(x){
    console.log( "in case of success: x" , x.data.message);
    setisSuccess(true);
    setTimeout(  function (){
      setisSuccess(false);
      navigate("/login");

    } ,2000)
    setisloading(false);
  
 })
  
  .catch(function(x){
  //  console.log( "in case of error: x" , x.response.data.message);
    setTimeout(function () {
     setErrorMessage( x.response.data.message);
    }, 2000);
    setisloading(false);

  })
 
    
    // .then( (x)=>{
    //   // in case of success
    // console.log( " in case of success :x" , x);

    // })
    
    // .catch( (x)=>{
    //   // in case of error
    // console.log( " in case of error :x" , x);
        

    // }) ;

      //  console.log( res.reponse.data.message);
 } 


 function mysubmit(values){

console.log("submitted..." , values);
   sendUserData(values);

 } 

  const myFormik = useFormik({
initialValues:userDate,
onSubmit : mysubmit,

validate:function(values){
   
  const errors = {};
    const nameRegex = /^[A-Z][a-z]{3,7}$/;
    const phoneRegex = /^01[0125][0-9]{8}$/;
 
   
     if( nameRegex.test( values.name ) === false){
         errors.name = "Name must be from 4 to 8 characters starts with capital letter";
     }

     if(values.email.includes( "@") !== true ||  values.email.includes(".") !== true ){
          errors.email = "Email must be in format" ;
     }

      if( phoneRegex.test(values.phone)  === false){
        errors.phone = " phone must be an Egyptian number";
      }

      if(values.password.length < 6  || values.password.length > 12 ){
        errors.password = "password must be from 6 to 12 character";
      }

      if(values.password !== values.rePassword ){
        errors.rePassword = "Password and rePassword don’t match";
      }

  // console.log("errors" , errors);



return errors ;
   
}


//  validationSchema: mySchema;



 })
  return (
    <>
       <div className='w-75 m-auto p-3'>

   {isSuccess ? <div className='alert alert-success text-center'>Congratulations your Account has been created. </div> :""}
   {errorMessage ?<div className='alert alert-danger text-center'>{errorMessage} </div> :""}

    <form onSubmit={myFormik.handleSubmit} >
    <h2>Register Now :</h2>

<label htmlFor="name">name:</label>
<input onBlur={myFormik.handleBlur} onChange = {myFormik.handleChange} value={myFormik.values.name} className='form-control mb-2 ' type="text" id="name" placeholder='Please enter your name' />
{myFormik.errors.name && myFormik.touched.name ? <div className='alert alert-danger '>{myFormik.errors.name}</div> : ""}

<label htmlFor="email">email:</label>
<input  onBlur={myFormik.handleBlur}  onChange = {myFormik.handleChange} value={myFormik.values.email} className='form-control mb-2' type="email" id="email" placeholder='Please enter your email'  />
{myFormik.errors.email && myFormik.touched.email? <div className='alert alert-danger '>{myFormik.errors.email}</div>:"" }

<label htmlFor="phone">phone:</label>
<input onBlur={myFormik.handleBlur}  onChange = {myFormik.handleChange} value={myFormik.values.phone} className='form-control mb-2' type="tel" id="phone" placeholder='Please enter your phone'/>
{myFormik.errors.phone && myFormik.touched.phone  ? <div className='alert alert-danger '>{myFormik.errors.phone}</div>:"" }


<label htmlFor="password">password:</label>
<input onBlur={myFormik.handleBlur}  onChange = {myFormik.handleChange} value={myFormik.values.password} className='form-control mb-2' type="password" id="password" placeholder='Please enter your Password'/>
{myFormik.errors.password && myFormik.touched.password ? <div className='alert alert-danger '>{myFormik.errors.password}</div>:"" }


<label htmlFor="rePassword">RePassword:</label>  
<input  onBlur={myFormik.handleBlur}  onChange = {myFormik.handleChange} value={myFormik.values.rePassword} className='form-control mb-2' type="password" id="rePassword" placeholder='Please enter your Repassword'/>
{myFormik.errors.rePassword && myFormik.touched.rePassword ? <div className='alert alert-danger '>{myFormik.errors.rePassword}</div>:"" }



<button type='submit' className='btn my-2 bg-main text-white'>
  
  {isloading ?<ColorRing
  visible={true}
  height="35"
  width="35"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
  /> : "Register"}
  
  
  
  
  
  
  </button>

    </form>
    </div>


    </>
  )
}





