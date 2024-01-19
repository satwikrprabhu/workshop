import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-wrap  justify-center items-center gap-4">
        <div className='flex flex-col justify-center items-center p-3 bg-slate-950  border border-gray-700 rounded-xl'>
        <Image src="https://github.com/satwikrprabhu.png" alt="" height={200} width={200} className='m-2 rounded-lg' />
        <h1 className="text-2xl font-bold text-white my-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Satwik Prabhu</h1>
        <a className="bg-slate-900 text-white rounded-md p-2 hover:bg-slate-800 font-semibold" target='_blank' href="https://github.com/satwikrprabhu">View Profile</a>
        </div>
        
</div>
  )
}

export default Card