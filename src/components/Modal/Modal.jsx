import React, { useContext, useEffect, useState } from 'react'
import './modal.css'
import { NotesContext } from '../../context/NotesProvider'
import Transition from '../ui/Transition';


const Modal = () => {
  const { modal, setModal, currentId, addNote, noteInfo, changeNote, closeModal, words, lang } =  useContext(NotesContext);
  const [input, setInput]= useState('')
  const [textarea, setTextarea]= useState('')
  const addHandle = ()=>{
    let title = input.trim();
    let desc = textarea.trim();
    if (title && desc) {
      let item = {
        id: currentId + 1,
        title,
        date: new Date().toLocaleDateString(),
        desc
      }
      addNote(item);
      setModal(false)
    }
  }

  useEffect(()=>{
    if (noteInfo) {
      setInput(noteInfo.title);
      setTextarea(noteInfo.desc);  
    } else {
      setInput('');
      setTextarea('');      
    }
  }, [modal])
  const changeHandle = ()=>{
    let title = input.trim();
    let desc = textarea.trim();
    if (title && desc) {
      let item = {
        id: noteInfo.id,
        title,
        date: new Date().toLocaleDateString(),
        desc
      }
      changeNote(item);
      setModal(false)
    }
  }
  return (
    <Transition className="modal" active={!modal} onClick={()=>{setModal(false)}}>
        <div className="modal__form" onMouseDown={(e)=>{ e.stopPropagation() }}>
            <h3 className="modal__title">{ noteInfo ? words.titlewindowedit[lang] : words.titlewindow[lang]}</h3>
            <div className="modal__content">
                <label>
                    <span>Title</span>
                    <input value={input} type="text" placeholder='Title' onChange={(e)=>{setInput(e.target.value);}}/>
                </label>
                <label>
                    <span>Content</span>
                    <textarea value={textarea} rows={1} placeholder='Content' onChange={(a)=>{setTextarea(a.target.value)}}></textarea>
                </label>
            </div>
            <div className="modal__controls">
                <button className='btn btn_red' onClick={()=>{closeModal()}}>{words.closebtn[lang]}</button>
                { noteInfo ?
                  <button className='btn' onClick={changeHandle}>{words.editwindowbtn}</button> :
                  <button className='btn' onClick={addHandle}>{words.addbtn[lang]}</button>
                }
            </div>
        </div>
    </Transition>
  )
}

export default Modal