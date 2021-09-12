import React from 'react';

class Contacts extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
