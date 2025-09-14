// // src/app/dashboard/Sidebar.tsx
// import Link from 'next/link'
// import {
//   HomeIcon,
//   ClipboardDocumentIcon,
//   ChartBarIcon,
//   CogIcon,
//   ArrowRightOnRectangleIcon,
// } from '@heroicons/react/24/solid'

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-gray-100 text-gray-800 flex flex-col border-r border-gray-300">
//       {/* Header / Logo */}
//       <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-300">
//         LOGO
//       </div>

//       {/* Sidebar items */}
//       <nav className="flex-1 mt-4 px-2 space-y-2">
//         <Link
//           href="/dashboard"
//           className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all"
//         >
//           <HomeIcon className="h-5 w-5" />
//           Dashboard
//         </Link>

//         <Link
//           href="/dashboard/manage-lists"
//           className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all"
//         >
//           <ClipboardDocumentIcon className="h-5 w-5" />
//           Manage Lists
//         </Link>

//         <Link
//           href="/dashboard/report-sales"
//           className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all"
//         >
//           <ChartBarIcon className="h-5 w-5" />
//           Report Sales
//         </Link>

//         <Link
//           href="/dashboard/profile-settings"
//           className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all"
//         >
//           <CogIcon className="h-5 w-5" />
//           Profile Settings
//         </Link>

//         <Link
//           href="/dashboard/logout"
//           className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all"
//         >
//           <ArrowRightOnRectangleIcon className="h-5 w-5" />
//           Logout
//         </Link>
//       </nav>
//     </div>
//   )
// }



// src/app/dashboard/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'

export default function Sidebar() {
  const pathname = usePathname() // current route

  return (
    <div className="w-64 bg-gray-100 text-gray-800 flex flex-col border-r border-gray-300">
      {/* Header / Logo */}
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-300">
        LOGO
      </div>

      {/* Sidebar items */}
      <nav className="flex-1 mt-4 px-2 space-y-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all ${
            pathname === '/dashboard' ? 'bg-gray-300 font-semibold rounded-full' : ''
          }`}
        >
          <HomeIcon className="h-5 w-5" />
          Dashboard
        </Link>

        <Link
          href="/dashboard/manage-lists"
          className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all ${
            pathname === '/dashboard/manage-lists' ? 'bg-gray-300 font-semibold rounded-full' : ''
          }`}
        >
          <ClipboardDocumentListIcon className="h-5 w-5" />
          Manage Lists
        </Link>

        <Link
          href="/dashboard/report-sales"
          className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all ${
            pathname === '/dashboard/report-sales' ? 'bg-gray-300 font-semibold rounded-full' : ''
          }`}
        >
          <ChartBarIcon className="h-5 w-5" />
          Report Sales
        </Link>

        <Link
          href="/dashboard/profile-settings"
          className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all ${
            pathname === '/dashboard/profile-settings' ? 'bg-gray-300 font-semibold rounded-full' : ''
          }`}
        >
          <CogIcon className="h-5 w-5" />
          Profile Settings
        </Link>

        <Link
          href="/dashboard/logout"
          className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-200 hover:rounded-full transition-all`}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Logout
        </Link>
      </nav>
    </div>
  )
}
