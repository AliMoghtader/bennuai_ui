'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
    const router = useRouter()
//  Simply redirect to login page
    useEffect(() => { setTimeout(()=>router.push('/login'),500) }, [router])

    return (
        <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Logging out...</p>
        </div>
    )
}
