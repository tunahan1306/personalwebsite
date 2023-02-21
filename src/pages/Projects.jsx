import React , {useState , useEffect} from 'react'
import { FaBriefcase , FaLaravel } from "react-icons/fa";
import { Modal , Button } from 'flowbite-react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link , useNavigate } from 'react-router-dom';

const Projects = () =>  {

  const navigate = useNavigate()

  const [post , setPost] = useState()

  const [count , setCount] = useState(0)

  const [modalshow , setModalshow] = useState(false)

  const [title , setTitle] = useState('')

  const [description , setDescription] = useState('')

  const projeClick = (event , id) => {
    console.log(id);

    post.map(function(item,i){
      if(item.id === id){
        setTitle(item.title)
        setDescription(item.description)
        setModalshow(true)
      }
    })
   
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/get_projects`)
    .then((res) => {
        setPost(res.data.projects);
        setCount(res.data.count)
      
      })
        .catch((err) => {
            console.log(err.message);
         });
   }, []);

    return (
      <div className='grid mx-auto justify-items-center'>
        {
          !post ? (
            <div className='loader-container'>
      	      <div className="spinner"></div>
            </div>
          ) : (<div className='grid mx-2 md:mx-5 lg:mx-10'>
        
        <div className='flex justify-center items-center gap-2 text-xl mt-0 mb-2 text-pink-800' >
          <FaBriefcase/>
          <h3 className="font-bold leading-normal ">
            PROJELER
          </h3>
        </div>
        
        <hr className="h-px mb-5  bg-pink-800 border-0 dark:bg-gray-700"></hr>
        {
            count > 0 ? (
              <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 justify-center items-strech'> 
          {
            post.map(function(item,i){
              var typeId = '';
              var image = '';
              const adi = item.title.split(' ');
              var link = '';

              link += item.id.toString();

              adi.map(function(at , t){
                link += '-' +  at;
              })

              
              item.projecttype.map(function(grev,x){
                typeId = grev.id;
                image = grev.image;
              })


              return  <div onClick={() => {navigate("/projects/" + link,{
                state:{
                  itemData:item,
                  itemImage:image,
                }
              }) }} key={'project' + item.id} className='flex items-strech'>
              <div className="max-w-sm bg-gray-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-300 cursor-pointer" >
              <img src={image} alt=""  className='self-center'/>
              <div className="py-2" >
                <h5 className="mb-2 text-md font-bold text-gray-700 tracking-tight text-center dark:text-white">{item.title}</h5>
              </div>
            </div>
              
              
              </div>
            })
          }

          <Modal
              show={modalshow}
              onClose={() => {setModalshow(false)}}
              dismissible={true}
            >
              <Modal.Header>
                {title}
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => {console.log('Accept');}}>
                  I accept
                </Button>
                <Button
                  color="gray"
                  onClick={() => {setModalshow(false)}}
                >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>

        </div>
            ) : (
              <div className='grid justify-center place-items-center'>
                <p className='text-lg'>Proje Yayınlanmadı.</p>
              </div>
            )
        }
        
      
      </div>
          )
        }
      </div>
      )
}

export default Projects