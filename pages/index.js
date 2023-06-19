import Navbar from "@/components/Navbar"
import Link from "next/link"
import Head from "next/head"

const index = () => {
  return (
    <>
    <Head>
    <title>home</title>
    <meta charset="UTF-8"/>
    <meta name="description" content="Free Web tutorials"/>
    <meta name="keywords" content="HTML, CSS, JavaScript"/>
    <meta name="author" content="John Doe"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
    </Head>
     
<Navbar/>

      <h1>hello</h1>
    </>
  )
}

export default index
