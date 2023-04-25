import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  // );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  const LOCAL_STORAGE_KEY = contacts;
  useEffect(() => {
    const stored_contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (stored_contacts) {
      setContacts(stored_contacts);
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ContactList contacts={contacts}/>} />
          <Route path='/add' element={<AddContact contactHandler={addContactHandler}/>} />
        </Routes>
        {/* <AddContact contactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} /> */}
      </Router>
    </div>
  );
}

export default App;
