import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    console.log(newContact);
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} вже є у списку контактів!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <>
        <Section title="Phone Book">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contact">
          <ContactFilter filter={filter} changeFilter={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
