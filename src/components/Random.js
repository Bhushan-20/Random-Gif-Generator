import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='font-bold text-xl underline'>A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="350"/>)
      }

      

      <button onClick={() => fetchData()} className='w-10/12 bg-slate-100 text-xl rounded-lg py-2 mb-[20px]'>Generate</button>
      
    </div>
  )
}

export default Random