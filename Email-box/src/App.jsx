import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/Firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclosure from "./hooks/useDisclosure";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    const contactsRef = collection(db, "contacts");

    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactList);
    });

    return () => unsubscribe();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(
        contactList.filter((contact) =>
          contact.name.toLowerCase().includes(value)
        )
      );
    });
  };

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input
            onChange={filterContacts}
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
        <AiFillPlusCircle
          onClick={onOpen}
          className="cursor-pointer text-5xl text-white"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.length === 0 ? (
          <NotFoundContact />
        ) : (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
      <ToastContainer position="bottom-center" />
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default App;
