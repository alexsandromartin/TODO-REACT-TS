import React, {useState} from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForms from './components/TaskForms';
import TaskList from './components/TaskList'; 
import Modal from './components/Modal';

//Css
import styles from "./App.module.css";

//interfaces
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) =>{
    setTaskList(
      taskList.filter(task =>{
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display){
      modal!.classList.remove("hide")
    } else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id:number, title:string, dificullty:number) => {
    
    const updateTask: ITask = {id, title, dificullty}

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask: task
    })

    setTaskList(updateItems)
    hideOrShowModal(false)

  }

  return (
    <div>
      <Modal children = {<TaskForms btntxt='Editar Tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>} />
      <Header/>
      <main className= {styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForms btntxt='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit = {editTask}/>
        </div>
      </main>
      <Footer/>
  </div>
  )
}

export default App;
