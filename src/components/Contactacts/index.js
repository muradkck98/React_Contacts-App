import { useState, useEffect } from 'react'

import "./style.css"
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
  return (
    <div id="Container">
      <h1>Contacts</h1>
        <List contacts = {contacts}/>
        <Form addContacts = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts