import React from 'react'
import { useParams } from 'react-router-dom'

const TestingPage = () => {
    const {id,id2}=useParams()
  return (
    <div className='bg-black padding overflow-hidden '>
     <h1 className='text-6xl text-violet-100 p-9'> hellow testing {id} { id2}</h1>
    </div>
  )
}

export default TestingPage
