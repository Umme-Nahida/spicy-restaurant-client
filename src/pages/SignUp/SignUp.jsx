import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {createUser}=useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(res=>{
          console.log(res.user)
          toast.success("user Created successfully")
          reset()
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage || errorCode)
        });
      }
      
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md space-y-6 mt-16 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div >
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="first_name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="first_name"
                  placeholder="Enter your name"
                  {...register("name",{ required: true })}
                  type="text"
                />
                 {errors.name && <p className="text-red-700">This is required.</p>}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter your email"
                {...register("email",{ required: true })}
                type="email"
              />
               {errors.email && <p className="text-red-700">This is required.</p>}
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="password_"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="password_"
                placeholder="password"
                {...register("password",{ required: true })}
                type="password"
              />
              {errors.password && <p className="text-red-700">This is required.</p>}
            </div>
            <button type="submit" className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
              Submit
            </button>
          </form>
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                if you have an account?
                <a href="/login" className="font-semibold underline">
                    Sing In
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
