import React from 'react';

import './App.css';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import dataContacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: dataContacts,
    filter: '',
  };

  addNewContact = newContact => {
    this.state.contacts.find(elem => elem.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form addContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={filteredContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}

export default App;
