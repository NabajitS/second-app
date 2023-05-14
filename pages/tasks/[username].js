import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import AppContext from '@/components/AppContext';
import { useContext } from 'react';


function Username() {
    
    const router = useRouter()
    const id = router.query.username;
    // console.log(appContext.tasks)
    const [task, setTask] = useState(null);
    const appContext = useContext(AppContext);
    

    useEffect(() => {
      if (id) {
        const selectedTask = appContext.tasks.find((task) => task.id.toString() === id);
        setTask(selectedTask);
      }
    }, [id, appContext.tasks]);

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      {task && (
        <div>
          <h2 className="text-xl font-bold mb-4">{task.note}</h2>
          {/* <p className="text-gray-500">
            Start Time: {task.start}  End Time: {task.end}
          </p> */}

          <span className="text-gray-500 mr-3" >Start Time: {task.start}</span> 
          <span className="text-gray-500" >End Time: {task.end}</span>
        </div>
      )}
    </div>
  )
}

export default Username;