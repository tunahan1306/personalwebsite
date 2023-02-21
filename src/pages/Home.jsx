import React, { useState,useEffect } from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';
import { BASE_URL } from '../config';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [anapost, setAnaposts] = useState([]);

   useEffect(() => {
    axios.get(`${BASE_URL}/get_contact`)
    .then((res) => {
            setPosts(res.data.contact);
            setAnaposts(res.data.mainpage);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  return (
    <div className="mx-auto justify-items-center">
      {loading ? (
        <div className='loader-container'>
      	  <div className="spinner"></div>
        </div>
      ) : (
        <div className="grid mx-auto p-4 justify-items-center">
            {
              anapost.map(function(item, i){
                return <div className="grid mx-auto justify-items-center" key={i}>
                  <img className="h-[300px] max-w-lg rounded-lg" src={item.image.length > 0 ? item.image:"https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"} alt="Tunahan Çakır"/>

                  <p className="max-w-lg text-xl font-semibold leading-normal text-gray-900 dark:text-white">{item.title}</p>
                  <TypeAnimation
                        sequence={[item.description, 1000, '']}
                        speed={35} 
                        wrapper="p"
                        repeat={Infinity}
                        style={{ fontSize: '15px' ,marginBottom:5}}
                      />

                </div>
              })
            }
          <div className="buttons m-2">
            {
              posts.map(function(item, i){
                return <a href={item.content || '#'} key={'link' + item.id} target="_blank" className={" focus:outline-none text-white bg-"+item.color+"-700 hover:bg-"+item.color+"-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-"+item.color+"-600 dark:hover:bg-"+item.color+"-700 "}>
                  <i className={item.ikon}></i>
                </a>
              })
            }
          </div>
          <hr className="w-full h-1 mx-auto my-2 max-w-md  bg-[#BABABA] border-0 rounded  dark:bg-gray-700"/>
          <Link to="/files/CV.pdf" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full max-w-md w-full" target="_blank" download>
            CV
          </Link>
          
         
        </div>
      )}
    </div>
  );
};

export default Home;