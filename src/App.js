import React, { useState} from 'react'
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  let [contacts, setContacts] = useState([])
  const getData = (data) => {
    setContacts([...contacts, data])
  }

  // useEffect(()=>{
  //   localStorage.setItem('Contacts', JSON.stringify(contacts))
  //     }, [contacts])

  // useEffect(()=>{
  //   let retrieveData=JSON.parse(localStorage.getItem('Contacts'))
  //   if(retrieveData){
  //     setContacts(retrieveData)
  //   }
  //     },[ contacts])


  return (
    <div className='ui'>
      <Header />
      <AddContact getData={getData} />
      < ContactList contacts={contacts} />
    </div>
  );
}

export default App;
