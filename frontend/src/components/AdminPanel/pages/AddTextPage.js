import React from 'react'
import RichTextEditor from '../components/RichTextEditor'

const AddTextPage = () => {
  return (
    <div className='flex flex-col'>
        <RichTextEditor/>
        <div className='flex justify-between'>
            <select className='border'>
                <option>Makale</option>
                <option>Perspektif</option>
                <option>Video</option>
            </select>
            <button className='p-3 bg-cyan-700 text-white'>
                KAYDET
            </button>
        </div>
    </div>
  )
}

export default AddTextPage