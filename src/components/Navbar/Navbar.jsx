import React, { useContext, useState } from 'react'
import './navbar.css'
// import search from '../../assets/img/search.svg'
import { back, close, search } from '../../assets/image'
import Transition from '../ui'
import { NotesContext } from '../../context/NotesProvider'

const Navbar = () => {
  const [addActive, setAddActive] = useState(true);
  const {text, setText, words, lang, setLang} = useContext(NotesContext);
  const changeActive = ()=>{
    setAddActive(!addActive);
    setText('');
  }
  const handleSearch = (event)=>{
    setText(event.target.value);
  }
  return (
    <header className="header">
      <Transition className="header__content" active={!addActive}>
       { lang == 'ru' ?
        <button className="header__lang" onClick={()=>setLang('uz')}>uz</button> :
        <button className="header__lang" onClick={()=>setLang('ru')}>ru</button>
        }
        <h1 className="header__title"> {words.appbartitle[lang]} </h1>
        <button className="header__search" onClick={changeActive}>
          <img src={search} alt="" />
        </button>
      </Transition>
      <Transition className="header__form active" active={addActive}>
        <button className="header__back" onClick={changeActive}>
          <img src={back} alt="" />
        </button>
        <input 
          type="text" 
          className="header__input container" 
          placeholder={words.appbarseacrch[lang]}
          onChange={handleSearch}
          value={text}
        />
        <button className="header__clear" onClick={()=>{setText('')}}>
          <img src={close} alt="" />
        </button>
      </Transition>
    </header>
  )
}

export default Navbar