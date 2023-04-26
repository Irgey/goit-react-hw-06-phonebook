import { useSelector } from 'react-redux';
import { ContactElement } from 'components';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = ({ onClickDeleteBtn }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const renderContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      return filteredContacts;
    }
    return contacts;
  };

  return (
    <ul>
      {renderContacts().map(({ name, number, id }) => (
        <ContactElement
          name={name}
          number={number}
          key={id}
          id={id}
          onClickDeleteBtn={onClickDeleteBtn}
        />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  onClickDeleteBtn: PropTypes.func,
};
