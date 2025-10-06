import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPaste, updatePaste } from '../redux/pasteslices'

const Home = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [Param, setParam] = useSearchParams()
    const pasteid = Param.get("pasteid")
    const allPastes = useSelector((state)=>state.paste.pastes)
    const dispatch = useDispatch()

     useEffect(()=>{
        const paste = allPastes.find((i)=>i._id===pasteid)
        if(paste){
        setTitle(paste.title)
        setContent(paste.content)
        }
    },[pasteid])
   

    const createPaste = () => {
        const paste = {
            title:title,
            content:content,
            _id:
            pasteid || Date.now().toString(30),
        }
        if(pasteid){
            dispatch(updatePaste(paste))
        } else {
            dispatch(addToPaste(paste))
        }
        setTitle("")
        setContent("")
        setParam()
    }

    
    
  return (
    <div className='mt-10 flex flex-col relative'>
        <div className='flex justify-center items-center gap-5 m-2'>
            <input type="text" placeholder='enter title here...' value={title} onChange={(e)=>setTitle(e.target.value)} className='bg-transparent border rounded-md text-sm lg:text-2xl font-semibold pl-3 py-1 lg:pl-5 lg:py-3 w-[80%] focus:outline-none'/>
            <button className='text-sm p-1 lg:p-3 bg-blue-700 border rounded-md hover:bg-blue-900 transition-all duration-200' onClick={createPaste}>
                {pasteid?"update paste":"create paste"}
            </button>
        </div>
        <div className='flex justify-center w-screen mt-10 pb-20'>
            <textarea name="content" placeholder='enter content here...' value={content} onChange={(e)=>setContent(e.target.value)} rows={20} className='bg-transparent w-[80%] border rounded-md focus:outline-none pl-5 py-3' ></textarea>
        </div>
        <div className='absolute bottom-0 text-white text-center w-full pb-2'>
            <p>Developed by Aayushman Mukherjee</p>
            <p><a href="http:/https://github.com/aayushmanmukherjee" target="_blank" className='hover:underline'>Github</a></p>
        </div>
    </div>
  )
}

export default Home
