import React, { useContext, useState } from 'react'
import { gridImg, list } from '../../assets/image'
import './notes.css'
import NotesItem from './NotesItem';
import { NotesContext } from '../../context/NotesProvider';

const Notes = () => {
  const [grid, setGrid] = useState(true);
  const { notes , text, words, lang} = useContext(NotesContext);
  const notesList  = notes.filter((elem)=>{
      let result = elem.title.concat(elem.desc).toLowerCase().includes(text.toLowerCase());
      return result
  })
  // console.log(notes);
  return (
    <div className="notes">
      <div className="container">
        <div className="notes__top">
          <h3 className="notes__title">{ notesList.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }</h3>
          <button className="notes__btn" onClick={()=>{setGrid(!grid)}}>
            <img src={grid ? list : gridImg } alt="" />
            <span>{ grid ? words.list[lang] : words.grid[lang]}</span>
          </button>
        </div>
        <div className={ grid ? 'notes__content' : "notes__content active"}>
          {
            notesList.map((elem)=>{
              return  <NotesItem grid={grid} key={elem.id} note={elem} />
            })
          }
         
        </div>
      </div>
    </div>
  )
}

export default Notes