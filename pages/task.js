import { useRouter } from 'next/router';
import { useState } from 'react';
import AppContext from '@/components/AppContext';
import { useContext } from "react"
import { v4 } from "uuid";

const TaskPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [taskName, setTaskName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const context = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update task details in state)


    context.setTasks( prev => [...prev, {
      start: startTime,
      end: endTime,
      note: taskName,
      id: v4()
    }] )

    // Navigate back to the previous page
    router.push('/tasks');
  };

  return (
<div className="max-w-lg mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Task Details: {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">
            Enter Task:
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Start Time:
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            End Time:
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskPage;
