import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const users = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((user) => (
        <Contact
          key={user.id}
          value={user}
          onDelete={() => dispatch(deleteContact(user.id))}
        />
      ))}
    </ul>
  );
};
