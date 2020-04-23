import React, { useState } from "react"
import Layout from "../components/Layout"
import firebase from '../lib/firebase'

const CreateAccount = () => {
    const [form, setForm] = useState({
        email: 'davidhumbertocosta@gmail.com',
        passwd: '123456',
        passwd2: '123456'
    })

    const onChange = evt => {
        const value = evt.target.value
        const field = evt.target.name   
        setForm(oldForm => ({
            ...oldForm,
            [field]: value
        }))
    }
    const createAccount = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword('david', '123')
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
    });

    }

        const changePasswd = evt => {
            const value = evt.target.value
            setForm(oldForm => ({
                ...oldForm,
                passwd: value
            }))

    }
    return (
        <Layout>   
        

           <div className="container max-w-full mx-auto md:py-24 px-6">
                <div className="max-w-sm mx-auto px-6">
                    <div className="relative flex flex-wrap">
                        <div className="w-full relative">
                            <div className="md:mt-6">
                                <div className="text-center font-semibold text-black">
                                    Lorem ipsum dolor
                                </div>
                                    <div className="text-center font-base text-black">
                                    Sed ut perspiciatis unde?
                                    </div>
                    <form className="mt-8" x-data="{password: '',password_confirm: ''}">
                                       <div className="mx-auto max-w-lg ">
                                       <div className="py-1">
                                            <span className="px-1 text-sm text-gray-600">Email</span>
                                            <input 
                                            value={form.email}
                                            name='email'
                                            onChange={onChange} 
                                            placeholder="" 
                                            type="email" 
                                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                        </div>
                                        <div className="py-1">
                                            <span className="px-1 text-sm text-gray-600">Password</span>
                                            <input 
                                            placeholder="" 
                                            value={form.passwd}
                                            onChange={onChange} 
                                            name='passwd'
                                            type="password" x-model="password" 
                                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                        </div>
                                        <div className="py-1">
                                            <span className="px-1 text-sm text-gray-600">Password Confirm</span>
                                            <input 
                                            placeholder="" 
                                            value={form.passwd2}
                                            onChange={onChange}
                                            name='passwd2'
                                            type="password" x-model="password_confirm"
                                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                        </div>
                                        <div className="flex justify-start mt-3 ml-4 p-1">
                                            <ul>
                                                <li className="flex items-center py-1">
                                                    <div className="{'bg-green-200 text-green-700': password == password_confirm && password.length > 0, 'bg-red-200 text-red-700':password != password_confirm || password.length == 0}" className=" rounded-full p-1 fill-current ">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path x-show="password == password_confirm && password.length > 0" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M5 13l4 4L19 7" />
                                                            <path 
                                                            x-show="password != password_confirm || password.length == 0" 
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" 
                                                            stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                    <span 
                                                    className="{'text-green-700': password == password_confirm && password.length > 0, 'text-red-700':password != password_confirm || password.length == 0}" 
                                                    className="font-medium text-sm ml-3" >
                                                    
                                                    { form.passwd === form.passwd2 && 'Passwords match' }
                                                    { form.passwd !== form.passwd2 && 'Passwords do not match' }
                                                    
                                                    </span>

                                                    </li>
                                                <li className="flex items-center py-1">
                                                    <div className="{'bg-green-200 text-green-700': password.length > 7, 'bg-red-200 text-red-700':password.length < 7 }" className=" rounded-full p-1 fill-current ">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path 
                                                            x-show="password.length > 7" 
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" 
                                                            stroke-width="2"
                                                            d="M5 13l4 4L19 7" 
                                                            />
                                                            <path 
                                                            x-show="password.length < 7" 
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" 
                                                            stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" 
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span 
                                                    className="{'text-green-700': password.length > 7, 'text-red-700':password.length < 7 }" 
                                                    className="font-medium text-sm ml-3" 
                                                    x-text="password.length > 7 ? 'The minimum length is reached' : 'At least 8 characters required' ">
                                                   
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-start">
                                            <label className="block text-gray-500 font-bold my-4 flex items-center">
                                                <input className="leading-loose text-pink-600 top-0" type="checkbox" />
                                                <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                                   <a href="#" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                                        Terms and Conditions of the site
                                                   </a>and
                                                   <a href="#" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                                        the information data policy.</a>
                                                </span>
                                            </label>
                                        </div>
                                        <button type='button' onClick={createAccount} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                            Register
                                     </button>
                                    </div>
                                </form>

                                <div className="text-sm font-semibold block sm:hidden py-6 flex justify-center">
                                    <a href="#" className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?

                   <span className="text-black font-semibold">
                     Login
                   </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )
}

export default CreateAccount