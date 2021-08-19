const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>{contact.name} - </p>
          <p>{contact.number}- </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
