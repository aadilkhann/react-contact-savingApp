import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const contacts=[
    {
      id:1,
      name:'Adil',
      email:'khan01970',
      contact:123456789
    },
    {
      id:2,
      name:'Aditi',
      email:'aditi01970',
      contact:987654321
    },
    {
      id:3,
      name:'Khan',
      email:'eidth01970',
      contact:6969696969
    },
  ]
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
