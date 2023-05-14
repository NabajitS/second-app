import React, {useContext} from 'react'
import AppContext from '@/components/AppContext'
import Link from "next/link"
import { useRouter } from 'next/router';

function Index() {

  const context = useContext(AppContext)
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/task');
  };

  return (
    <div>
    <nav className="bg-blue-950 py-3 px-3">
      <button onClick={handleSubmit} className="bg-white py-1 px-1">
        create tasks
      </button>
    </nav>

    <div className="w-4/5  m-auto max-w-screen-lg mt-5">
      <h1 className="text-3xl text-center font-black">Schedule</h1>
      <h3 className="text-center text-sky-500">Learn more about our agenda</h3>

      <div>
        {context.tasks.map((task, i) => (
          <Link href={'/tasks/' + task.id} key={i}>
            <div className="mt-8  mb-8 sm:flex items-center ">
              <p className="w-1/4 text-slate-500 text-sm  sm:text-right mr-4 ">
                {task.start} - {task.end}
              </p>
              <h4 className="text-base text-left font-semibold ">
                {task.note}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Index