import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col py-10 justify-center items-center'>
      <h1>404 Not Found</h1>
      <Link href={"/"}>Go Home</Link>
    </div>
  )
}
