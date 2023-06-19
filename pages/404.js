import React from 'react'
import { useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Error = () => {
    const Router = useRouter();

    const handleinput = ()=>{
        Router.push("/");
    }

    useEffect(() => {
        setTimeout(()=>{
            Router.push("/");
        },3000)
        
    }, [])


  return (
    <>
    
    
    <div className="errorpage">
    <h1>404 page found</h1>
    <a onClick={()=> Router.push('/')}> back to home</a>
    <a onClick={handleinput}> back to home</a>
    </div>

    </>
  )
}

export default Error
