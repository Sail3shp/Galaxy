import { useEffect, useState } from 'react'
import SideBar from './components/Sidebar'
import Footer from './components/Footer'
import Main from './components/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [data,setData] = useState(null)
  const [loading ,setLoading ] = useState(false)
  const [showModal,setShowModal] = useState(false)  

  const handleToggleModal = () =>{
    setShowModal(!showModal)

  }

  useEffect(()=>{
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
    try{
     const res = await fetch(url); 
     const data = await res.json()
     setData(data)
     console.log(data)
    } catch(err){
      console.log(err.message)
    }
  }
  fetchAPIData()
},[])

  return (
    <>
      {data ? (<Main data={data}/>):(
        <div className='loadingState'>
          <FontAwesomeIcon icon = {faSpinner} />
        </div>
      )}
      {showModal &&(<SideBar data = {data} handleToggleModal={handleToggleModal}/>)}
      {data && (
        <Footer data={data} handleToggleModal= {handleToggleModal}/>
      )}
    </>
  )
}

export default App
