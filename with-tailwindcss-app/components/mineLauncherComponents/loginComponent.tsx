import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useUser} from "@/hooks/useUser";
import {authExists} from "../../../../mine/with-tailwindcss-app/helpers/AuthHelper";
import Link from 'next/link'
import {Formik} from "formik";
import * as Yup from "yup";
import {authUser} from "@/core/actions/auth";

export function LoginComponent() {
    const [displayWrongCredsMessage, setDisplayWrongCredsMessage] = useState(false)
    const router = useRouter()
    let [displayAuthForm, setDisplayAuthForm] = useState(false)
    const user = useUser()

    useEffect(() => {
        setDisplayAuthForm(localStorage !== undefined && !user)
        console.log('Auth form: ', displayAuthForm)
        if (user) {
            router.push('/')
        }
    }, [user])

    const tryLogin = async (username: string, password: string) => {
        const authResult = await authUser(username, password)
        console.log(authResult)
        if (!authResult) {
            setDisplayWrongCredsMessage(true)
        }

        if (authExists() && authResult) {
            router.push('/')
        }
    }

    const validationsSchema = Yup.object().shape({
        username: Yup.string()
            .required('Требуемое поле'),
        password: Yup.string()
            .min(6, 'Пароль слишком короткий.')
            .required('Требуемое поле'),
    })

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log("submitting")
                    tryLogin(values.username, values.password)
                }}
                validationSchema={validationsSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <>
                        <div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8 ">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в личный
                                    кабинет</h2>
                            </div>

                            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                <div className="border-2 border-blue-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                    <div className="space-y-6">
                                        {displayWrongCredsMessage ? (
                                            <div
                                                className='bg-red-400 text-gray-700 w-full px-3 py-4 font-medium text-white rounded-full'>Неправильный
                                                логин или пароль</div>
                                        ) : null}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                                {touched.username && errors.username ? (
                                                    <div className='text-red-400'>{errors.username}</div>
                                                ) : null}
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.username}
                                                    autoComplete="username"
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password"
                                                   className="block text-sm font-medium text-gray-700">
                                                Пароль {touched.password && errors.password ? (
                                                <div className='text-red-400'>{errors.password}</div>
                                            ) : null}
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                    autoComplete="current-password"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">
                                                <a href="#"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Забыли пароль?
                                                </a>
                                            </div>
                                            <div className="text-sm">
                                                <Link href="/registration" passHref>
                                                    <a className="font-medium text-indigo-600 hover:text-indigo-500">Зарегистрироваться</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                                onClick={() => {
                                                    handleSubmit();
                                                }}
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Войти
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Formik>
        </>

    )
}

export default LoginComponent