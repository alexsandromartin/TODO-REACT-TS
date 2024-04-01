import React from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForms from './components/TaskForms';
import TaskList from './components/TaskList';

//Css
import styles from "./App.module.css"

//interfaces
import { ITask } from './interfaces/Task';

function App() {
  return (
    <div>
      <Header/>
      <main className= {styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForms btntxt='Criar Tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList/>
        </div>
      </main>
      <Footer/>
  </div>
  )
}

export default App;
