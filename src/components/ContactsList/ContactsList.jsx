import PropTypes from 'prop-types'

const ContactsList = ({ contacts, deleteContactsButton }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} - </p>
          <p>{number}- </p>
          <button
            type="button"
            onClick={() => deleteContactsButton(id)}
            aria-label="Delete contact button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContactsButton: PropTypes.func.isRequired,
};

export default ContactsList;
