import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-yellow-50 flex flex-1 h-24 justify-between py-2 px-4 items-center'>
        <Link href="" className=' flex flex-1 items-center '>
        <Image src="/Images/image.png" width={80} height={80}/>
        <span className='text-yellow-500 font-mono text-3xl font-bold'>Juice Shop</span>
        </Link>

        <div className='flex gap-2 text-slate-600 font-semibold space-x-5 '>
            <Link href="#" className='hover:text-slate-500'>Home</Link>
            <Link href="#" className='hover:text-slate-500'>Login</Link>
            <Link href="#" className='hover:text-slate-500'>Register</Link>
        </div>
    </div>
  )
}

export default Header