import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const [disabled,setDisabled] = useState(true)
    const {loginUser}=useContext(AuthContext)
    // useForm
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        loginUser(data.email,data.password)
        .then(res=>{
            console.log(res.user)
            toast.success("user login successfully")
            reset()

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage || errorCode)
          });
      }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleCaptcha=(e)=>{
     
     const captcha_value = e.target.value;
     console.log(captcha_value)
     if (validateCaptcha(captcha_value)==true) {
        alert('Captcha Matched');
        setDisabled(false)
    }

    else {
        alert('Captcha Does Not Match');
    }
    }

    return (
       <div className='min-h-screen bg-red-500 flex items-center justify-center'>
         <div className="mx-auto w-full mt-16 max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

            <form action="#" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username"
                        placeholder="Enter your email"
                        {...register("email",{required:true})}
                        type="emial"
                        required
                    />
                    {errors.email && <p className="text-red-700">This is required.</p>}
                </div>
                {/* password field */}
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        {...register("password",{required:true})}
                        type="password"
                        required
                    />
                    {errors.password && <p className="text-red-700">This is required.</p>}
                    <div className="flex justify-end text-xs">
                        <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                  <LoadCanvasTemplate />
                    <input
                        onBlur={handleCaptcha}
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="captcha"
                        placeholder="Enter the captcha above"
                        name="captcha"
                        required
                    />
                    
                </div>
                <button disabled={disabled} className="btn rounded-md btn-primary">Submit</button>
            </form>
            <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                Don&apos;t have an account?
                <a href="/signup" className="font-semibold underline">
                    Signup
                </a>
            </p>
        </div>
       </div>
    );
};

export default Login;