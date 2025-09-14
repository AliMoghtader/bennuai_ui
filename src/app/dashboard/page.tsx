// src/app/dashboard/manage-lists/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Sidebar from './Sidebar'

export default function ManageListsPage() {
  const token = cookies().get('auth-token')?.value
  if (!token) redirect('/login')

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1  bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 fond-bold">Manage Lists</h1>
        <p className='text-gray-600'>This is the Manage Lists content.</p>
      </div>
    </div>
  )
}