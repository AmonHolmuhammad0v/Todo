import React, { createContext, useEffect, useState } from 'react'
import words from '../assets/lang';
export const NotesContext = createContext(null);

const NotesProvider = ({children}) => {
    
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'Vue',
            date: '07.03.2022',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            id: 2,
            title: 'React',
            date: '07.03.2022',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            id: 3,
            title: 'Angular',
            date: '07.03.2022',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
    ])
    const [modal, setModal] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [noteInfo, setNoteInfo] = useState(null);
    const [text, setText] = useState('');
    const [lang, setLang] = useState('ru');
    const addNote = (item)=>{
        const newNotes = [...notes, item];
        setNotes(newNotes)
        setCurrentId(item.id)
    }

    const delNote = (id)=>{
        const newNotes = notes.filter((elem)=> elem.id != id);
        setNotes(newNotes)
    }
    useEffect(()=>{
        let localNotes = localStorage.getItem('notes');
        // console.log(localNotes);
        localNotes = JSON.parse(localNotes);
        if(Array.isArray(localNotes)){
            setNotes(localNotes);
        }
        let localLang = localStorage.getItem('lang');
        if (localLang) {
            setLang(localLang)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
        const last = notes.length - 1;
        const id = last >= 0 ? notes[last].id : 0;
        setCurrentId(id)
    }, [notes])

    useEffect(()=>{
        localStorage.setItem('lang', lang)
    }, [lang])

    const editNote = (id)=>{
        let value = notes.find((elem)=> elem.id == id)
        setNoteInfo(value);
        setModal(true);
    }

    const changeNote = (item)=>{
        let newNotes = notes.map((elem)=>{
            if (elem.id == item.id) {
                elem.title = item.title;
                elem.desc = item.desc;
                elem.date = item.date;
            }
            return elem;
        })
        setNotes(newNotes);
        setNoteInfo(null);
    }

    const closeModal = ()=>{
        setNoteInfo(null);
        setModal(false) 
    }

    return (
        <NotesContext.Provider value={ {
            notes, modal, setModal, 
            currentId, addNote, delNote,
            editNote, noteInfo, changeNote,
            closeModal,text, setText, words,
            lang, setLang
            } }>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider