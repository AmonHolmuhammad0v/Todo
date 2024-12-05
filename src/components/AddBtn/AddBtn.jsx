import React, { useContext } from 'react'
import { edit } from '../../assets/image';
import './add-btn.css'
import { NotesContext } from '../../context/NotesProvider';

const AddBtn = () => {
    const {setModal} = useContext(NotesContext)
  return (
    <button className="add-btn" onClick={ ()=>{ setModal(true) } }>
        <img src={edit} alt="" />
    </button>
  )
}

export default AddBtn