import React from "react"

//Css
import styles from './Modal.module.css'

interface Props {

}

const Modal = (props: Props) =>{
    return (
        <div id="modal">
            <div></div>
            <div>
                <h2>Texto Modal</h2>
            </div>
        </div>
    )
}

export default Modal