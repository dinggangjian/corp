"use client"
import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routerData = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Tags',
    path: '/tags'
  },
  {
    name: 'Settings',
    path: '/settings'
  }
]
const Navbar: NextPage = () => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className='w-full flex justify-center absolute z-10'>
      <div className="container h-24 flex justify-between items-center text-white">
        <div>
          <Link href="/" className='font-black text-3xl '>Home</Link>
        </div>
        <div className='space-x-8 text-2xl font-medium'>
          {
            routerData.map(item => <Link className={pathName === item.path ? 'text-red-500' : ''}  href={item.path} key={item.name}>{item.name}</Link>)
          }
        </div>
      </div>
    </div>
  );
};
export default Navbar;
