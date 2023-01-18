import React from 'react';
import styles from './tasks.module.css';
import Task from '../task/Task.jsx';

export default function Tasks({tasks,onComplete,onDelete}) {

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <section className = {styles.tasks}>
        <header className =  {styles.header}>
            <div>
                <p>Create tasks</p>
                <span>{tasksQuantity}</span>
            </div>
            <div>
                <p className={styles.textPurple}>Completed tasks</p>
                <span> {completedTasks} of {tasksQuantity}</span>
            </div>
        </header>
        <div className={styles.list}>
          {tasks.map(task =>(
            <Task key={task.id} task={task} onDelete={onDelete}  onComplete={onComplete}/>
          ))}
          </div>

    </section>
  )
}
