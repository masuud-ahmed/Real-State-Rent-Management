import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignInPeMutation } from "../../store/api/AuthSlices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import SignIn from '../../assets/images/login-bro.png'

function Content() {
  const navigate = useNavigate()
  const [change, setChange] = useState(true)

  const [signInPe, { error = {} }] = useSignInPeMutation()

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("password is required"),
    email: Yup.string().required(" email is required"),
  });

  const handleSubmit = (values) => {
    signInPe({
      email: values.email,
      password: values.password,
    }).unwrap().then(() => {
      navigate("/tenant/dashboard")
    }).catch((err) => {
      console.log(err)
      if (error.status === 401) {
        toast.error("Invalid email or passoword")

      }

    })


  }

  return (
    <div className="md:px-[9%]">
      <ToastContainer />
      <h2 className="text-center font-medium text-3xl text-[#00befe] pt-[4%]">Login With...</h2>
      <div className=" items-center flex md:flex-row flex-col md:gap-0 gap-4 justify-around text-center mb-[2%] mt-[4%] p-4">
      
      <div className="max-[768px]:hidden w-[490px] h-[480px] items-center left-4 mb-5">
          <img src={SignIn} alt="SignUp image" />
        </div>

        <div className="md:w-[500px] w-[90%] items-center bg-white md:p-11 p-8 rounded-lg  mb-2 shadow-2xl border-2">
          <h2 className="text-center font-medium text-2xl text-[#00befe]">Login Tenant</h2>
          <Formik
            className='p-8'
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}

          >
            <Form>
              <div>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-7 outline-[#00befe]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-left text-red-400"
                />
              </div>

              <div className="relative">
                <Field
                  type={`${change ? 'password' : 'text'}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6  outline-[#00befe]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-left text-red-400"
                />
                <div onClick={() => setChange(!change)} className="cursor-pointer absolute top-10 right-4 text-[#555]">
                  {change ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 rounded-[8px] bg-[#00befe] px-12 py-3 text-white 
                hover:bg-sky-500 text-[18px]"
              >
                Sign In
              </button>
            </Form>
          </Formik>

          <div className="flex justify-between items-center pt-5">
            <p className="text-sm">Don’t have account?</p>
            <Link to="/signup" className="text-sm md:text-lg text-[#00befe] font-medium pt-3">
              Sign Up
            </Link>
          </div>
            <div className="text-center mt-5 flex justify-between">
              <h5>if You want Business LogIn </h5>

          <Link to='/busines/signIn' >
              <p>
                <b className="text-[#00befe]">Click here</b>
              </p>
          </Link>
            </div>
        </div>
      </div>

      {/* <BuContent/> */}


    </div>
  );
}

export default Content;
