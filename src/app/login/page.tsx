// src/app/login/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { PassThrough } from 'stream'
import { useRouter } from 'next/navigation'


export default function LoginPage() {
  const [showForm, setShowForm] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 500)
    return () => clearTimeout(timer)
  }, [])
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // simple email regex
    if (!regex.test(value)) {
      setError('Please enter a valid email')
    } else {
      setError('')
    }
  }

  const submit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email,password})
    })

    const data = await res.json()

    if (!data.success){
      setError(data.message)
    } else {
      router.push('/dashboard')
    }


  }


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/loginbg.jpg"
        alt="Background"
        fill
        className={`object-cover transition-all duration-1000 ${
          showForm ? 'blur-sm scale-105' : ''
        }`}
      />

      {/* Overlay with form */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          showForm ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h1>

          <form className="space-y-4" onSubmit={submit}>
            
<div className="relative w-full">
  <input
    type="email"
    id="email"
    placeholder=" "   // Important: leave a space
    className="peer w-full p-4 border border-gray-700 rounded text-gray-800 placeholder-transparent focus:outline-none focus:border-gray-500 ${
          error ? 'border-red-500' : 'border-gray-700'
        }"
    onChange={(e) => {
          setEmail(e.target.value)
          validateEmail(e.target.value)
        }}
  />
  <label
        className="absolute left-4 top-4 text-gray-600 text-sm transition-all 
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
          peer-focus:top-1 peer-focus:text-gray-800 peer-focus:text-sm
          peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-gray-800 peer-not-placeholder-shown:text-sm"
      >
        Email
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
</div>
<div className="relative w-full">
      {/* Password input */}
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={(e)=>{setPassword(e.target.value)}}
        className="peer w-full p-4 pr-10 border border-gray-700 rounded text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500"
      />

      {/* Floating label */}
      <label
        className="absolute left-4 top-4 text-gray-600 text-sm transition-all 
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
      peer-focus:top-1 peer-focus:text-gray-800 peer-focus:text-sm
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-gray-800 peer-not-placeholder-shown:text-sm"
      >
        Password
      </label>

      {/* Eye toggle button */}
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>

    </div>
            {/* Keep me logged in + Forgot password */}
            <div className="flex items-center justify-between text-gray-700 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-gray-800 border-gray-700 rounded cursor-pointer" />
                <span>Keep me logged in</span>
              </label>
              <Link href="/login" className="text-gray-800 hover:underline font-bold">
                Forgot password?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full  bg-gray-800 text-white py-2 rounded hover:bg-gray-900 cursor-pointer"
            >
              Login
            </button>

            {/* Register link */}
            <p className="text-center text-sm text-gray-700">
              Don&apos;t have an account?{' '}
              <Link href="/login" className="text-gray-800 hover:underline font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
