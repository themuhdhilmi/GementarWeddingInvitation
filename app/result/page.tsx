'use client'
import React, { useEffect } from 'react'
import { Roboto } from 'next/font/google'
import { useGetUcapan } from '../utilities/useGetUcapan'
const inter = Roboto({ subsets: ['latin'], weight: ['300'] })

const Page = () => {
  const { sendData, data } = useGetUcapan()

  useEffect(() => {
    sendData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const datafiltered = data?.ucapan?.filter((item: any) => item.isHadir === true)
  const datafilteredFalse = data?.ucapan?.filter((item: any) => item.isHadir === false)

  // totalJumlahKehadiranDewasaWanita : totalJumlahKehadiranDewasaWanita._sum.kehadiranDewasa,
  // totalJumlahKehadiranKanakKanakWanita : totalJumlahKehadiranKanakKanakWanita._sum.kehadiranKanak,

  // totalJumlahKehadiranDewasaLelaki : totalJumlahKehadiranDewasaLelaki._sum.kehadiranDewasa,
  // totalJumlahKehadiranKanakKanakLelaki : totalJumlahKehadiranKanakKanakLelaki._sum.kehadiranKanak,


  return (
    <div className="p-5">
      <div>TOTAL KEHADIRAN DEWASA : {data?.totalJumlahKehadiranDewasa}</div>
      <div>TOTAL KEHADIRAN KANAK KANAK :{data?.totalJumlahKehadiranKanakKanak}</div>

      <div className='mt-5 border-t-2 border-pink-800 w-fit'>[WANITA]TOTAL KEHADIRAN DEWASA : {data?.totalJumlahKehadiranDewasaWanita}</div>
      <div>[WANITA]TOTAL KEHADIRAN KANAK KANAK :{data?.totalJumlahKehadiranKanakKanakWanita}</div>

      <div className='mt-5 border-t-2 border-blue-800 w-fit'>[LELAKI]TOTAL KEHADIRAN DEWASA : {data?.totalJumlahKehadiranDewasaLelaki}</div>
      <div>[LELAKI] KEHADIRAN KANAK KANAK :{data?.totalJumlahKehadiranKanakKanakLelaki}</div>
      <table className={'table-auto w-full text-center ' + inter.className}>
        <tr>
          <th className="border">Name</th>
          <th className="border">Id</th>
          <th className="border">Text</th>
          <th className="border">Kehadiran</th>
          <th className="border">Hadir Dewasa</th>
          <th className="border">Hadir Kanak-Kanak</th>
          <th className="border">Jenis</th>
        </tr>
        {datafiltered?.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className="border">{item.name}</td>
              <td className="border">{item.id}</td>
              <td className="border">{item.text}</td>
              <td className={`border font-bold ${item.isHadir ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}>{item.isHadir ? 'Hadir' : 'Tidak Hadir'}</td>
              <td className="border">{item.kehadiranDewasa}</td>
              <td className="border">{item.kehadiranKanak}</td>
              {item.type === 'WANITA' ? <td className="border bg-pink-800 text-white px-2">{item.type}</td> : <td className="order bg-blue-800 text-white px-2">{item.type}</td>}
            </tr>
          )
        })}
        {datafilteredFalse?.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className="border">{item.name}</td>
              <td className="border">{item.id}</td>
              <td className="border">{item.text}</td>
              <td className={`border font-bold ${item.isHadir ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}>{item.isHadir ? 'Hadir' : 'Tidak Hadir'}</td>
              <td className="border">{item.kehadiranDewasa}</td>
              <td className="border">{item.kehadiranKanak}</td>
              {item.type === 'WANITA' ? <td className="border bg-pink-800 text-white px-2">{item.type}</td> : <td className="order bg-blue-800 text-white px-2">{item.type}</td>}
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Page
