import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MenuOptions =[
    {
        name: 'Pricing',
        Path: '/pricing'
    },
    {
        name: 'Contact Us',
        Path: '/contact-us'
    }
]

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
      {/* LOgo */}
      <div className='flex gap-2 item-center'>
        <Image src={'/logo.svg'} alt='logo' width={35} height={35}/>

        <h2 className='font-bold text-xl'>Ai Website Generator</h2>
    </div>
    
      {/* meno options */}

      <div className='flex gap-3 font-bold'>
        {MenuOptions.map((menu,index)=>(
            <Button variant={'ghost'} key={index}>{menu.name}</Button>
        ))}
      </div>


      {/* grt started button */}

      <div>

        <Button>Get Started <ArrowRight/></Button>
      </div>
    </div>
  )
}

export default Header
