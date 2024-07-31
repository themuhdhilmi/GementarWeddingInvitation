'use client'
import Image from 'next/image'
import React from 'react'

const SalamKaut = () => {
  return (
    <div className='bg-white shadow-lg p-3 flex flex-col justify-center text-center'>
        <div className='text-xs font-bold pb-2'>Salam Kaut</div>
        <div className='text-xs'>Kamarul&apos;Azmi Bin Azman</div>
        <div className='text-xs pb-2'>1623 6700 0797</div>
        <div className='flex flex-row justify-center'>
            <Image src="/images/qr_bank.png" alt="alt" width={100} height={100} />
        </div>
        <div className='text-xs'>Imbas kod QR</div>
    </div>
  )
}

export default SalamKaut