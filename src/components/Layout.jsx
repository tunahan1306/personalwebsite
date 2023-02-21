import React, { useState } from 'react'
import {NavLink , Outlet } from "react-router-dom";
import { AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai';

const Layout = () => {

    const [acik , setAcik] = useState(false)

    const degis = () => {
        if(acik){
            setAcik(false)
        }else{
            setAcik(true)
        }
    }

    return (
      <>
        <div>
            {
                acik ? (
                <nav className="bg-transparent border-gray-200 m-5 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="#"></a>
                        <button onClick={degis} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <AiOutlineClose className='text-xl'/>
                        </button>
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink onClick={degis} to="/" className={({ isActive }) =>
                                isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                'bg-transparent px-3 py-2 text-center'
                                } >
                                Ana Sayfa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={degis} to="/about" className={({ isActive }) =>
                                isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                'bg-transparent px-3 py-2 text-center'
                                }>
                                Hakkında
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink onClick={degis}  to="/projects" className={({ isActive }) =>
                                isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                'bg-transparent px-3 py-2 text-center'
                                }>
                                Projeler
                                </NavLink>
                            </li>
                          
                            <li>
                                <NavLink onClick={degis}  to="/contact" className={({ isActive }) =>
                                isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                'bg-transparent px-3 py-2 text-center'
                                }>
                                İletişim
                                </NavLink>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                ) : (
                        <nav className="bg-transparent border-gray-200 m-5 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                                <div className="container flex flex-wrap items-center justify-between mx-auto">
                                <a href="#"></a>
                                    <button onClick={degis} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                    <AiOutlineMenu className='text-xl font-medium' />
                                    </button>
                                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                    <ul className="flex flex-col mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                        <li>
                                        <NavLink to="/" className={({ isActive }) =>
                                            isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                            'bg-transparent px-3 py-2 text-center'
                                            } >
                                        Ana Sayfa
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/about" className={({ isActive }) =>
                                            isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                            'bg-transparent px-3 py-2 text-center'
                                            }>
                                            Hakkında
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/projects" className={({ isActive }) =>
                                            isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                            'bg-transparent px-3 py-2 text-center'
                                            }>
                                            Projeler
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/contact" className={({ isActive }) =>
                                            isActive ? 'text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center' : 
                                            'bg-transparent px-3 py-2 text-center'
                                            }>
                                            İletişim
                                        </NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </nav>
                )
            }
        </div>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;