"use client"

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

export default function Home() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value)
  }
  return (
    <main className='n w-3/4 mx-auto p-5'>
      <h2 className='text-4xl font-bold text-center'>Translate language</h2>
      <h3 className='text-3xl text-center'>Bangla || English</h3>
      <div className='nn mt-4 mx-auto  md:w-2/4 border-2 p-5'>
        <select  onChange={(e) => handleClick(e)} className='w-2/4 mx-auto text-blue-500 font-semibold'>
          <option>Select Language</option>
          <option value={"eng"}>English</option>
          <option value={"ban"}>Bangla</option>
        </select>

        <div className='mt-3'>
          <h1>{t('Welcome to my website')} !</h1><br />

          <h2>{t('Hello developers ! How are you all ?')}</h2>
        </div>
      </div>
    </main>
  )
}
