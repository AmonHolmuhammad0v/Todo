import React, { useContext } from 'react'
import { del, edit } from '../../assets/image'
import { NotesContext } from '../../context/NotesProvider';

const NotesItem = ({grid, note}) => {
    // const NotesItem = (c, a) => {
    // const { grid } = c
    const {title, date, desc, id} = note;
    console.log(note);
    const {delNote, editNote, words, lang} = useContext(NotesContext)
  return (
    <div className="card">
        <div className={ grid ? '' : "card__top"}>
            <h4 className="card__title">{title}</h4>
            <p className="card__date">{date} </p>
        </div>
        <p className="card__desc">{desc} </p>   
        <div className="card__controls">
            <button className="btn" onClick={()=>{editNote(id)}}>
                <img src={edit} alt="" />
                <span>{words.editbtn[lang]}</span>
            </button>
            <button className="btn btn_red" onClick={()=>{delNote(id)}}>
                <img src={del} alt="" />
                <span>{words.deledit[lang]}</span>
            </button>
        </div>

    </div>
  )
}

export default NotesItem