import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillFileAdd, AiFillFileExclamation  } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <div className='bg-red-100 fixed '>
         <div className='container rounded-lg gap-5 flex flex-col items-center bg-gradient-to-r from-light-blue to-grey-blue pt-4 text-slate-100 h-screen px-2'>
          <TiThMenu className='text-4xl'/>
          <AiFillFileAdd className='text-4xl'/>
          <AiFillFileExclamation className='text-4xl'/>
          <Link to="/admin"><FaUserCircle className='text-4xl ms-2'/>Admin</Link>
          <MdOutlineMenuBook className='text-4xl'/>
          <BiLogOutCircle className='text-4xl'/>  
          </div>
        </div>
    </>
  )
}

export default Navbar
