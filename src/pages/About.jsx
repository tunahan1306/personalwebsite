import React, { useState,useEffect } from 'react';
import { FaRegCalendar,FaGraduationCap , FaLaptopCode , FaArrowCircleUp} from "react-icons/fa";
import axios from 'axios';
import { BASE_URL } from '../config';
import { Timeline , Button , Modal , Progress} from 'flowbite-react';

const About = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [skills_types, setskills_types] = useState([]);
  const [experience_types, setexperience_types] = useState([]);

  const [deneyimModalvisible , setDeneyimModalVisible] = useState(false)
  const [deneyimtitle , setDeneyimtitle] = useState('')
  const [deneyimtimeline , setDeneyimtimeline] = useState([])

  const [beceriModalvisible , setBeceriModalVisible] = useState(false)
  const [becerititle , setBecerititle] = useState('')
  const [beceriprogres , setBeceriprogres] = useState([])

  const deneyimbuttonclick = (event , id) => {

    experience_types.map(function(item,i){
      if(item.id === id){
        setDeneyimtitle(item.title)
        setDeneyimtimeline(item.experience)
      }
    })

    setDeneyimModalVisible(true)
  }

  const beceributtonclick = (event , id) => {

    skills_types.map(function(item,i){
      if(item.id === id){
        setBecerititle(item.title)
        setBeceriprogres(item.skills)
      }
    })

    setBeceriModalVisible(true)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/get_about`)
    .then((res) => {
          
            setskills_types(res.data.skills_types);
            setexperience_types(res.data.experience_types);
            setPosts(res.data.about);
            setLoading(false);
            
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="grid mx-auto justify-items-center">
      {loading ? (
        <div className='loader-container'>
      	  <div className="spinner"></div>
        </div>
      ) : (
        <div  className="grid">
          {
            
            posts.map(function(item, i){
              
              return <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={'about'+item.id}>
                <div className='max-w-lg p-4'>
                  <img className="h-auto w-auto rounded-lg max-w-full" src={item.image.length>0 ? item.image:"https://upload.wikimedia.org/wikipedia/commons/3/38/2010-11_Turkish_Cup.jpg"} alt="image description"/>
                </div>
                <div className='mx-2 md:ml-10 '>
                <p className="text-2xl font-medium">{item.title}</p>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                {item.description}
                </p>
                </div>
              </div>
            })
          }
          <p className="text-2xl font-bold my-5 text-center">Deneyimler</p>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4'>
            {
              experience_types.map(function(item, i){
                return <Button
                outline={true}
                gradientDuoTone="purpleToPink"
                key={'deneyimtipibutton' + item.id}
                onClick={(event) => deneyimbuttonclick(event , item.id)}
              >
                <div className='text-lg' style={{margin:50}}>
                  <i className={item.icon+' mr-2'} ></i>
                  <br />
                  {item.title}
                </div>
                
              </Button>
              })
            } 
          </div>


          <Modal
              dismissible={true}
              show={deneyimModalvisible}
              onClose={() => {setDeneyimModalVisible(false)}}
             
            >
              <Modal.Header>
                {deneyimtitle}
              </Modal.Header>
              <Modal.Body>
              
              <div className="text-center">
                <Timeline>
                {
                  deneyimtimeline.map(function(item,i){
                    const month = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
                    var d = new Date(item.date)
                    let name = d.getDate() + ' ' + month[d.getMonth()] + ' ' +  d.getFullYear();
                    return <Timeline.Item key={'timeline' + item.id}>
                    <Timeline.Point icon={FaRegCalendar} />
                    <Timeline.Content className='bg-blue-200 rounded-lg py-4'>
                      <Timeline.Time className='text-sm'>
                        {name}
                      </Timeline.Time>
                      <Timeline.Title className='text-lg'>
                        {item.title}
                      </Timeline.Title>
                      <Timeline.Body className='text-md'>
                        {item.description}
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  })
                }
                  
                </Timeline>
              </div>
              </Modal.Body>
              
            </Modal>
       
        <p className="text-2xl font-bold my-5 text-center">Beceriler</p>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-10 p-4'>
            {
              skills_types.map(function(item, i){
                return <Button
                outline={true}
                gradientDuoTone="redToYellow"
                key={'deneyimtipibutton' + item.id}
                onClick={(event) => beceributtonclick(event , item.id)}
              >
                <div className='text-lg' style={{margin:50}}>
                  <i className={item.icon+' mr-2'} ></i>
                  <br />
                  {item.title}
                </div>
                
              </Button>
              })
            } 
          </div>

          <Modal
              dismissible={true}
              show={beceriModalvisible}
              onClose={() => {setBeceriModalVisible(false)}}
             
            >
              <Modal.Header>
                {becerititle}
              </Modal.Header>
              <Modal.Body className="m-0 p-0">
              
              <div>
               
                {
                  beceriprogres.map(function(item,i){
                    return <div key={'beceriprogres' + item.id}>
                       <div className={'text-lg text-left font-medium text-' + item.color + '-700 mb-1'}>
                       <i className={item.icon + ' mr-2'}></i>
                          {item.title}
                        </div>
                        <Progress
                          progress={item.value}
                          color={item.color}
                          style={{marginBottom:10}}
                        />
                    </div>
                  })
                }
              </div>
              </Modal.Body>
              
            </Modal>

        </div>
        
      )}
    </div>
  );
};

   

export default About