import React, { useState } from 'react';
import logo from "../../assets/img/3cb3fbee952630b0a26f3c8c211651e9 (1).png"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id:1, name: "Home"},
        {id:1, name: "About Us"},
        {id:1, name: "Features"},
        {id:1, name: "Solution"}
    ]
    return (
        <nav className='flex justify-between items-center'>
            <div onClick={()=> setOpen(!open)} className='text-white w-6 h-6 md:hidden ml-5'>
                {
                    open ? <p className='text-2xl font-bold'>x</p> :  <FaBars></FaBars>
                }
            </div>
            <div className='flex items-center font-bold ml-28 mr-5 md:mr-0'>
                <img className='w-14' src={logo} alt="" />
                <h2 className='text-white'>OR <span className='text-orange-300'>BIDO</span></h2>
            </div>
            <ul className={`md:flex justify-end gap-14 mr-36 ml-5 md:ml-0 duration-500 ease-in text-white absolute md:static ${open ? 'top-14' : 'top-[-120px]'}`}>
                {
                    routes.map(route=> <li key={route.id}>{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;