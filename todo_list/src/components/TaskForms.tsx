import React, {useState, ChangeEvent, FormEvent, useEffect} from "react"

//useState é um hook no React que permite adicionar estado a componentes funcionais. Em termos simples, o useState é uma função que retorna um par de valores: o estado atual e uma função para atualizar esse estado.
//ChangeEvent: Para poder alterar alguma coisa qunado estiver um evento acontecendo na tela.
//FormEvent: Submeter o formulário

//components
import styles from "./TaskForms.module.css"

//interfaces
import { ITask } from '../interfaces/Task';

interface Props{
    btntxt: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id:number, title:string, dificullty:number): void
}

const TaskForms = ({btntxt, taskList, setTaskList, task, handleUpdate}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [dificullty, setDificullty] = useState<number>(0)

    useEffect(() => {
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDificullty(task.dificullty)   ; 
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(handleUpdate){
            handleUpdate(id, title, dificullty)
        }else{
            const id = Math.floor(Math.random()*1000)

            const newTask: ITask = {id, title, dificullty}

            setTaskList!([...taskList, newTask])

            setTitle("")
            setDificullty(0)
        }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { //ChangeEvent<HTMLInputElement>é basicamente um tipo de evento em TypeScript que ocorre quando algo muda em um elemento de input HTML, como um campo de texto. É como se fosse uma notificação que o TypeScript entende quando você digita algo em um campo de texto em um formulário, por exemplo.
        if(e.target.name === "title"){
            setTitle(e.target.value)
        } else{
            setDificullty(parseInt(e.target.value)) //parsetInt: Troca uma string para um número 
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="dificullty">Dificuldade:</label>
                <input type="text" name="dificullty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={dificullty}/>
            </div>
            <input type="submit" value={btntxt}/>
        </form>
    )
}

export default TaskForms