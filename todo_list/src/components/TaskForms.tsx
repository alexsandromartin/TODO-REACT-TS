import React from "react"

//components
import styles from "./TaskForms.module.css"

interface Props{
    btntxt: string
}

const TaskForms = ({btntxt}: Props) => {
    return (
        <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="dificullty">Dificuldade:</label>
                <input type="text" name="dificullty" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value={btntxt}/>
        </form>
    )
}

export default TaskForms