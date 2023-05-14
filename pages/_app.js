import '@/styles/globals.css'
import AppContext from '@/components/AppContext'
import { useState } from 'react'


export default function App({ Component, pageProps }) {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      start: "10:00",
      end: "12:00",
      note: "Natus Dolorum, corporis consectetur deleniti "
    },
    { 
      id: 2,
      start: "10:00",
      end: "12:00",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      id: 3,
      start: "10:00",
      end: "12:00",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
  ]) 

  return (
    <AppContext.Provider value={{tasks, setTasks}} >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
