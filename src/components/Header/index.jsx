import React, { useState } from 'react'
import styles from './header.module.css'
import todoLogo from '../../assets/todoicon.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Index({onAddTask}) {

    const [title,setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        onAddTask(title)
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

  return (
    <div className={styles.header}>
     <img src={todoLogo} />
     <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='add a new task' type='text' value={title} onChange={onChangeTitle} />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
     </form>
    </div>
  )
}
