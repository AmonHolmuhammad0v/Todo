import AddBtn from './components/AddBtn'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import NotesProvider from './context/NotesProvider'


const App = () => {
  

  return (
    <NotesProvider>
      <Navbar/>
      <Notes/>
      <Modal/>
      <AddBtn/>
    </NotesProvider>
    
  )
}

export default App