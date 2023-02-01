import React from 'react'
import Toggle from './toggle'

//ChakraUI Imports 



//Navigation Bar
const Navbar=()=> {
    return (
        <Toggle/>
    )
}

//Footer 
const Footer=()=>{
    return
}

//Static Layout for Entire Web Page
const Layout=({children}) =>{
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout;