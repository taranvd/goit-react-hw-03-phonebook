import { ButtonStyled, List, ListItem } from './ContactsList.style';
export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name} - {contact.number}
          <ButtonStyled onClick={() => deleteContact(contact.id)}>
            Delete
          </ButtonStyled>
        </ListItem>
      ))}
    </List>
  );
};
