import css from "./App.module.css";
import "modern-normalize";
import { FcContacts } from "react-icons/fc";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";

export const App = () => {
  return (
    <>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>

      <h1 className={css.title}>
        Phonebook
        <FcContacts className={css.bookitem} />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
