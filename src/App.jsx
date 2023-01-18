import React, { useEffect, useState } from 'react'
import Index from "./components/Header/index.jsx"
import Task from './components/tasks/Tasks.jsx'

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

const App = () => {
  const [tasks,setTasks] = useState([]);
  
  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() =>{
    loadSavedTasks();
  }, [])

  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks));
  }

  function addTask(taskTitle){
    setTasksAndSave([
    ...tasks, 
    {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }
    ])
  }

  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks)
  }

  return (
    <>
    <Index onAddTask={addTask}/>
    <Task tasks={tasks}
    onDelete={deleteTaskById}
    onComplete={toggleTaskCompletedById}
    />
    </>
  )
}

export default App
