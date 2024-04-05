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

  const deleteTask = (id:number) =>{
    setTaskList(
      taskList.filter(task =>{
        return task.id !== id
      })
    )
  }

  return (
    <div>
      <Modal />
      <Header/>
      <main className= {styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForms btntxt='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer/>
  </div>
  )
}

export default App;
