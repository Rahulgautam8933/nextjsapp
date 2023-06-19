import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
     
    <nav>

    <ul className='menu-bar'>

      <li>
        <Link href="/" >
          home
        </Link>
      </li>
      <li>
        <Link href="/about" >
          about
        </Link>
      </li>
      <li>
        <Link href="/blog" >
          blog
        </Link>
      </li>
      <li>
        <Link href="/contact" >
          contact
        </Link>
      </li>

    </ul>

  </nav>

  

    </>
  )
}

export default Navbar
