import React, {useEffect , useState} from 'react'
import { useParams , NavLink , useLocation} from 'react-router-dom'
import { Breadcrumb } from 'flowbite-react';
import { FaHome , FaBriefcase , FaGithubSquare } from "react-icons/fa";
import axios from 'axios';
import { BASE_URL } from '../config';

const Proje = () => {

    const params = useParams();

    const location = useLocation()

    const [title , setTitle] = useState(location.state.itemData.title)

    const [image , setImage] = useState(location.state.itemImage)

    const [description , setDescription] = useState(location.state.itemData.description)

    const [url , setUrl] = useState(location.state.itemData.url)
    
return (<div className='grid mx-auto'>
    {
        !location.state ? (
            <div className='grid mx-auto justify-items-center'>
                Proje Bulunamadı
            </div>
        ) : (
            <>
            <Breadcrumb
        className="bg-transparent py-3 px-5 hidden md:block"
        >
        <Breadcrumb.Item icon={FaHome}>
            <NavLink to="/" className='hover:text-black'>
                Ana Sayfa
            </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item icon={FaBriefcase}>
            <NavLink  to="/projects" className='hover:text-black'>
                Projeler
            </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <p className='text-black'>
                {title}
            </p> 
        </Breadcrumb.Item>
        </Breadcrumb>
  <div className='grid place-items-center mx-2 md:mx-4 lg:mx-8'>
    <img className="h-auto  max-w-full rounded-lg" src={image} alt="image description"></img>
    <hr className="h-px my-4 w-full bg-pink-400 border-0 dark:bg-gray-700"></hr>
    <p className="text-xl text-center mb-5  max-w-full font-semibold leading-relaxed text-gray-900 dark:text-white">{title}</p>
    {description}
        
  </div>
  <div className='my-5 mx-5 flex place-items-center gap-2'>
        <FaGithubSquare />
        Source Code : <a href={url} target="_blank" rel="noopener noreferrer">{url}</a> 
    </div>
            
            </>
        )
    }
          
    </div>
  )
}

export default Proje
