import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <div className='bg-slate-800 flex flex-1 h-20 justify-between py-2 px-4 items-center'>
        <Link href="" className='text-white text-3xl font-bold flex flex-1 items-center'>
        <Image src="/Images/image.png" width={80} height={80}/>
        Admin Panel
        </Link>

        <div className='flex gap-4 text-white'>
            <Link href="#">Home</Link>
            <Link href="#">Login</Link>
            <Link href="#">Register</Link>
        </div>
    </div>
  )
}

export default AdminHeader