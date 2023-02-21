import React, { useState } from 'react'
import axios from 'axios';

export const Contact = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [veri,setVeri] = useState([])
  const [verigeldi,setverigeldi] = useState(false)
  const [buttonloading,setbuttonloading] = useState(false)

  const handleUsername = (e) =>{
    const getusername = e.target.value;
    setUsername(getusername)
  }
  const handleEmail = (e) =>{
    const getemail = e.target.value;
    setEmail(getemail)
  }
  const handleMessage = (e) =>{
    const getmessage = e.target.value;
    setMessage(getmessage)
  }

  const handleSubmit = (e) => {
    setbuttonloading(true)
    e.preventDefault();

    axios.post('http://msy.tunahancakir.com/api/insert_message', {
      name: username,
      email: email,
      message:message
    })
    .then(function (response) {
      console.log(response.data.messages);
      const myObj = response.data.messages;
      const myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);

      // Retrieving data:
      let text = localStorage.getItem("testJSON");
      let obj = JSON.parse(text);
      console.log(obj.name);
      setVeri(obj.name)
      setverigeldi(true)
      setbuttonloading(false)
    })
    .catch(function (error) {
      alert(error);
    });
  }
  return (
    <div>
        {
          (verigeldi) ?  ( 
            <div id='success_page' className='grid mx-auto p-4 max-w-4xl justify-items-center w-screen  place-items-center rounded-lg bg-purple-100'>
              <h1>E-posta başarıyla gönderildi.</h1>
              <p>Teşekkürler <strong>{veri}</strong>, mesajınız tarafımıza iletilmiştir.</p></div>
           
             ):
          (
            <div className="container px-2 mx-auto">

            <section className="grid mx-auto justify-items-center text-center text-gray-800 bg-purple-100 max-w-lg rounded-md shadow-lg">
              <div className="max-w-lg mx-auto ">
                <h2 className="text-xl font-bold my-5 mx-5">Benimle İletişime Geçin</h2>
                <hr className="h-px my-4 w-full md:w-[25rem] mx-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <input type="text" id="name" onChange={(e)=>handleUsername(e)} className="block bg-purple-100  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                  <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-purple-100  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">İsim</label>
                </div>
                <div className="relative mb-6">
                  <input type="email" id="email" onChange={(e)=>handleEmail(e)} className="block bg-purple-100 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                  <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-purple-100  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                </div>
                <div className="relative mb-6">
                  <textarea type="text" id="message" onChange={(e)=>handleMessage(e)} className="block bg-purple-100  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                  <label htmlFor="message" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-purple-100  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mesaj</label>
                </div>
                  <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out mb-6" disabled={buttonloading}>
                      {
                        (buttonloading) ? (
                          <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px" }}
                          /> 
                        ):''
                      }
                      {
                        (buttonloading) ? 'Göderiliyor...':'Gönder'
                      }
                    </button>
                </form>
              </div>
            </section>
            
            </div>
          )
          
         
        }

      </div>
  )
}

export default Contact