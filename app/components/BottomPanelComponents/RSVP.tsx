'use client'
import { useSendUcapan } from '@/app/utilities/useSendUcapan'
import { Button, Label, Modal, RangeSlider, TextInput, Radio, Textarea, Alert } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { FaPerson } from 'react-icons/fa6'
import { HiInformationCircle } from 'react-icons/hi'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { BiChild } from 'react-icons/bi'

const RSVP = (props: any) => {
  const [openModal, setOpenModal] = useState(false)
  const [userCountDewasa, setUserCountDewasa] = useState(1)
  const [userCountKanakKanak, setUserCountKanakKanak] = useState(0)
  const { sendData, data, success } = useSendUcapan()

  const [error, setError] = useState('')

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [isChecked, setIsChecked] = useState(true) // Default state

  const handleChange = (event: any) => {
    setIsChecked(event.target.value === 'true')
  }

  const handleSubmit = () => {
    let err = ''
    if (phone === '') {
      err += ' [Nombor telefon tidak boleh kosong]'
    }
    if (name === '') {
      err += ' [Nama tidak boleh kosong]'
    }

    setError(err)

    if (phone === '') {
      return
    }
    if (name === '') {
      return
    }

    setError('')

    const postData = {
      id: phone,
      name: name,
      text: text,
      isHadir: isChecked,
      kehadiranDewasa: userCountDewasa,
      kehadiranKanak: userCountKanakKanak
    }

    sendData(postData)
  }

  return (
    <>
      <div className="w-full flex flex-row justify-center ">
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className="flex flex-col justify-center text-white py-2"
        >
          <div className="w-full flex flex-row justify-center">
            <MdOutlineTableRestaurant className="text-2xl" />
          </div>
          <p className="text-xs">RSVP</p>
        </button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Répondez s&apos;il vous plaît</Modal.Header>

        {success === 'SUCCESS' ? '' : ''}

        {success === 'SUCCESS' ? (
          <Alert className="my-4 mx-5" color="success">
            <span className="font-medium">Sukses!</span> Telah berjaya dihantar
          </Alert>
        ) : (
          ''
        )}
        <Modal.Body className={`${success === 'SUCCESS' ? 'hidden' : ''}`}>
          {error === '' ? (
            ''
          ) : (
            <Alert className="my-4" color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Ralat!</span> {error}
            </Alert>
          )}

          {success === 'ERROR' ? (
            <Alert className="my-4" color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Ralat!</span> Sila cuba semula.
            </Alert>
          ) : (
            ''
          )}

          <fieldset className="flex w-full flex-row gap-4 justify-center border rounded-lg py-5 mb-2">
            <div className="flex items-center gap-2">
              <input type="radio" id="united-state" name="countries" value="true" checked={isChecked} onChange={handleChange} />
              <label htmlFor="united-state">Hadir</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="germany" name="countries" value="false" checked={!isChecked} onChange={handleChange} />
              <label htmlFor="germany">Tidak Hadir</label>
            </div>
          </fieldset>

          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nama" value="Nama*" />
              </div>
              <TextInput value={name} onChange={(e: any) => setName(e.target.value)} id="nama" placeholder="Bilal" required />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="no-phone" value="Nombor telefon*" />
              </div>
              <TextInput value={phone} onChange={(e: any) => setPhone(e.target.value)} id="no-phone" placeholder="0164557636" required />
            </div>
          </div>
          <div className="border rounded-lg my-6 px-4 py-5  flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <div className="flex flex-row">
                <FaPerson />
                {userCountDewasa} Dewasa
              </div>
              <div className="flex flex-row">
                <BiChild />
                {userCountKanakKanak} Kanak Kanak
              </div>
            </div>
            {/* <div className="flex flex-row justify-center">
              <Label htmlFor="no-phone" value="Jumlah Kehadiran" />
            </div> */}
          </div>
          {/* <RangeSlider
            id="default-range"
            value={userCountDewasa}
            onChange={(e) => setUserCountDewasa(parseInt(e.target.value))}
            min={1}
            max={10}
            step={1}
          /> */}

          <div>
            <div className="mb-2 block">
              <Label htmlFor="number" value="Bilangan Dewasa" />
            </div>
            <TextInput id="number" type="number"  onChange={(e) => setUserCountDewasa(parseInt(e.target.value))} value={userCountDewasa} required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="number" value="Bilangan Kanak-Kanak" />
            </div>
            <TextInput id="number" type="number"  onChange={(e) => setUserCountKanakKanak(parseInt(e.target.value))} value={userCountKanakKanak} required shadow />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Ucapan anda (Jika ada)" />
            </div>
            <Textarea value={text} onChange={(e: any) => setText(e.target.value)} id="comment" placeholder="" rows={4} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {success === 'SUCCESS' ? (
            ''
          ) : (
            <Button
              onClick={() => {
                // setOpenModal(false);
                handleSubmit()
              }}
            >
              Hantar
            </Button>
          )}

          <Button color="gray" onClick={() => setOpenModal(false)}>
            {success === 'SUCCESS' ? 'Tutup' : 'Batal'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RSVP
