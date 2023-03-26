import React from 'react'
import {Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div>Shubhi</div>
      <Link to ='/SignUp'>SignUp</Link>
      <Link to ='/Login'>Login</Link>
    </div>
  )
}

export default Home
