"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // パスを配列に分割
  const paths = pathname.split('/').filter(Boolean)
  
  // パンくずリストの項目を生成
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const label = path.charAt(0).toUpperCase() + path.slice(1)
    
    return {
      href,
      label,
    }
  })

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link href="/" className="hover:text-gray-700">
        ホーム
      </Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          <span className="mx-2">/</span>
          <Link
            href={breadcrumb.href}
            className={`hover:text-gray-700 ${
              index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : ''
            }`}
          >
            {breadcrumb.label}
          </Link>
        </div>
      ))}
    </nav>
  )
} 