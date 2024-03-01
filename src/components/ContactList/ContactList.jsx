import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectFilter } from "../../redux/filtersSlice.js";

export const ContactList = () => {
  const users = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((user) => (
        <Contact key={user.id} value={user} />
      ))}
    </ul>
  );
};
