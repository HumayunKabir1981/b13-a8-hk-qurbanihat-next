"use client"
import Link from 'next/link';
import React from 'react';
import logo from '@/asset/logo.png'
import Image from 'next/image';
import avater from '@/asset/user.png'
import { authClient } from '@/lib/auth-client';
import NavLink from './NavLink';

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession()

    const user = session?.user;
    console.log("session user", user);
    return (
        <div className="navbar bg-amber-50  sticky top-0 z-50 shadow-md px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/animals">All Animal</NavLink></li>
                    </ul>
                </div>

                <div >
                    <Link href="/">  <Image
                        src={logo}
                        alt="logo"
                        width={250}
                        height={150}
                        className="rounded-full object-cover"
                    /></Link>
                </div>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">

                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/animals">All Animal</NavLink></li>


                </ul>
            </div>

            <div className="navbar-end flex  items-center gap-5">
                {isPending ? (
                    "Loading...."
                ) : user ? (
                    <div className='flex items-center gap-3'>
                        <h2 className='text-xl font-bold flex items-center'>Hello, {user.name}</h2>
                        <Image src={user?.image || avater} height={50} width={50} alt='avater' className='rounded-full' />
                        <button className='btn btn-primary' onClick={async () => await authClient.signOut()}>Logout</button>
                    </div>

                ) : (

                    <div>
                        <Link href="/login"> <button className='btn btn-soft btn-primary'>Login</button> </Link>

                        <Link href="/register"> <button className='btn btn-soft btn-primary'>Register</button> </Link>
                    </div>

                )
                }

            </div>


        </div>
    );
};

export default NavBar;