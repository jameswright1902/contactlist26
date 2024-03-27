import './App.css'
import { useState } from 'react'
import ContactList from './components/contactlist';
// import SelectedContact from "./components/SelectedContact";


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
