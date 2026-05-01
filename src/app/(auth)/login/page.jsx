'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLOginFunc = async (data) => {


        // console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);

    }
    return (
        <div className='container mx-auto bg-slate-100 flex items-center justify-center h-[80vh]'>
            <div className='bg-white'>
                <h1 className='text-3xl font-bold mb-5'>Login Your Account</h1>

                <form className='space-y-4' onSubmit={handleSubmit(handleLOginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input"
                            name='email'
                            {...register("email", { required: true })}
                            placeholder="Type here Email" />
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input"
                            {...register("password", { required: "password is requered" })}
                            placeholder="Type here Password" />
                        <span className='absolute right-1 top-5 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword?<FaEye /> :<FaEyeLowVision />}
                            
                        </span>
                        {errors.password && <p>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn btn-neutral w-full'>Login</button>
                </form>
                <p> Don't have account? <Link href='/registar'>Register</Link></p>
            </div>

        </div>
    );
};

export default LoginPage;