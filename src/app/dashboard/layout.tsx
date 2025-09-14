import Sidebar from './Sidebar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get('auth-token')?.value

  if (!token) {
    // No valid cookie → redirect to login
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Panel */}
      <div className="flex-1 p-6 bg-gray-50" >{children}</div>
    </div>
  )
}
