import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import  './Spinner.css'

export const Spinner = () => {
  return (
    <div className='text-center text-white'>
        <FaSpinner className='SpinnerFunc m-5' size={60}  />
    </div>
  )
}
