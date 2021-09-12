import React from 'react';

import './App.css';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import * as dataContacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Contacts contacts={dataContacts} />
      </div>
    );
  }
}

export default App;
