import PropTypes from 'prop-types'
import style from '../ContactsList/ContactsList.module.css'

const ContactsList = ({ contacts, deleteContactsButton }) => {
  return (
    <ul className = { style.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={ style.contactsList}>
          <p>{name} - </p>
          <p>{number}- </p>
          <button
            className={ style.contactsButton}
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
