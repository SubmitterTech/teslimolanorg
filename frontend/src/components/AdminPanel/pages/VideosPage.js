import React from 'react'

const VideosPage = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row '>
        <div className='w-20 h-20 bg-red-700 dark:bg-black'></div>
        <div className='w-20 h-20  bg-red-700 md:bg-cyan-600 lg:bg-green-600 xl:bg-slate-600'></div>
        <div className='w-20 h-20 bg-red-700'></div>
        <div className='w-20 h-20 bg-red-700'></div>
        <div className='w-20 h-20 bg-red-700'></div>
    </div>
  )
}

export default VideosPage