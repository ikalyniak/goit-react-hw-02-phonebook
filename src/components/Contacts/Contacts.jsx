import React from 'react';

class Contacts extends React.Component {
  onDelete = id => {
    this.props.onClick(id);
  };

  render() {
    const contacts = this.props.contacts;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
            <button type="button" onClick={() => this.onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
